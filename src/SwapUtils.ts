import { EthAddress, SwapInfoIfInput, SwapInfoIfOutput, uint256 } from "./types"
import RouterAbi from "./abis/Swap/PancakeSwapRouter.json";
import FactoryAbi from "./abis/Swap/PancakeSwapFactory.json";
import PairAbi from "./abis/Swap/PancakeSwapPair.json";
import Dec from "decimal.js";
import { JsonRpcProvider, Contract, InterfaceAbi, ZeroAddress } from "ethers";
import { convertHexStringToAddress, getAddr } from "./addresses";
import BigNumber from "bignumber.js";
const RouterAbiItem: InterfaceAbi = RouterAbi
const FactoryAbiItem: InterfaceAbi = FactoryAbi
const PairAbiItem: InterfaceAbi = PairAbi

export class RouterContract {
  contractUtil: Contract
  constructor(web3: JsonRpcProvider, address: EthAddress) {
    this.contractUtil = new Contract(address, RouterAbiItem, web3);
  }
  async getAmountOut(amount: uint256, path: EthAddress[]): Promise<any> {
    const res = await this.contractUtil.getAmountsOut(amount, path)
    return res.map((el: string) => BigNumber(el).toFixed(0));
  }
  async getAmountIn(amount: uint256, path: EthAddress[]): Promise<any> {
    const res = await this.contractUtil.getAmountsIn(amount, path)
    return res.map((el: string) => BigNumber(el).toFixed(0));
  }

}
export class FactoryContract {
  contractUtil: Contract
  constructor(web3: JsonRpcProvider, address: EthAddress) {
    this.contractUtil = new Contract(address, FactoryAbiItem, web3);
  }
  async getPair(addr1: EthAddress, addr2: EthAddress): Promise<any> {
    const res = await this.contractUtil.getPair(addr1, addr2)
    return res
  }
}

export class PairContract {
  contractUtil: Contract
  constructor(web3: JsonRpcProvider, address: EthAddress) {
    this.contractUtil = new Contract(address, PairAbiItem, web3);
  }
  async getReserves(): Promise<any> {
    const res = await this.contractUtil.getReserves();
    return res.map((el: any) => new Dec(String(el)).toFixed());
  }
}
export class SwapUtil {
  web3: JsonRpcProvider;
  FactoryContract: FactoryContract;
  RouterContract: RouterContract;
  chainId: number;
  constructor(_url: string, _chainId: number) {
    this.web3 = new JsonRpcProvider(_url);
    this.chainId = _chainId;
    this.FactoryContract = new FactoryContract(this.web3, getAddr("FactoryAddress", _chainId))
    this.RouterContract = new RouterContract(this.web3, getAddr("RouterAddress", _chainId))
  }
  isZeroAddress(address: EthAddress): boolean {
    return address.toLowerCase() === ZeroAddress
  }
  async getInformationFromInput(
    _fromToken: EthAddress,
    _toToken: EthAddress,
    slippage: number,
    amountFrom: uint256
  ): Promise<SwapInfoIfInput> {

    let fromToken = convertHexStringToAddress(_fromToken);
    let toToken = convertHexStringToAddress(_toToken);
    let path: EthAddress[] = [];
    let amountOut;
    let impact: number = 0;
    let minimumReceive;
    let pairAddr = await this.FactoryContract.getPair(fromToken, toToken)
    let needUseMultihop = false;
    let WBNBAdress = getAddr("WBNBAdress", this.chainId);
    if (!this.isZeroAddress(pairAddr)) {
      console.log("pairAddr", pairAddr, !this.isZeroAddress(pairAddr))
      let fromR;
      let toR;
      path = [fromToken, toToken]
      let pairContract = new PairContract(this.web3, pairAddr)
      const reserve = await pairContract.getReserves();
      let amountOutFromContract = await this.RouterContract.getAmountOut(amountFrom, path)
      if (BigNumber(fromToken).isLessThan(toToken)) {
        fromR = String(reserve[0])
        toR = String(reserve[1])
      }
      else {
        fromR = String(reserve[1])
        toR = String(reserve[0])
      }
      console.log("fromR", fromR)
      let tmpImpact = new Dec(amountFrom).div(new Dec(amountFrom).add(new Dec(fromR)));
      // console.log("amountOutFromContract", amountOutFromContract)
      // console.log("tmpImpact is",tmpImpact)
      //impact =new Dec(amountOut).div(new Dec(toR).sub(new Dec(amountOut)))
      if (Number(tmpImpact) > 5 / 100)
        needUseMultihop = true;
      else {
        amountOut = String(amountOutFromContract[1]);
        minimumReceive = (new Dec(amountOutFromContract[1]).mul(1 - slippage).floor());
        impact = Number(tmpImpact)
        console.log("amountOut", amountOut)
      }
    }
    if ((this.isZeroAddress(pairAddr) || needUseMultihop) && (fromToken != WBNBAdress && toToken != WBNBAdress)) {
      path = [fromToken, WBNBAdress, toToken]
      let amountOutFromContract = await this.RouterContract.getAmountOut(amountFrom, path)
      // console.log("amountOutFromContract", amountOutFromContract)
      let pair1Addr = await this.FactoryContract.getPair(fromToken, WBNBAdress)
      let pair1Contract = new PairContract(this.web3, pair1Addr)
      const reserve = await pair1Contract.getReserves();
      let fromR;
      if (BigNumber(fromToken).isLessThan(WBNBAdress)) {
        fromR = reserve[0]
      }
      else {
        fromR = reserve[1]
      }
      amountOut = amountOutFromContract[2];
      minimumReceive = (new Dec(amountOutFromContract[2]).mul(1 - slippage).floor())
      impact = Number(new Dec(amountFrom).div(new Dec(amountFrom).add(new Dec(fromR))))

    }
    // console.log(
    //   {
    //     amountIn: amountFrom,
    //     amountOut: amountOut,
    //     minimumReceive: String(minimumReceive),
    //     priceImpact: impact,
    //     path: path
    //   }
    // )
    return {
      amountIn: amountFrom,
      amountOut: amountOut,
      minimumReceive: String(minimumReceive),
      priceImpact: impact,
      path: path
    };
  }

  async getInformationFromOutput(
    _fromToken: EthAddress,
    _toToken: EthAddress,
    slippage: number,
    amountTo: uint256
  ): Promise<SwapInfoIfOutput> {
    let fromToken = convertHexStringToAddress(_fromToken);
    let toToken = convertHexStringToAddress(_toToken);

    let path: EthAddress[] = [];
    let amountIn: string = "";
    let impact: number = 0;
    let maximumSold;
    let pairAddr = await this.FactoryContract.getPair(fromToken, toToken)
    let needUseMultihop = false;
    let WBNBAdress = getAddr("WBNBAdress", this.chainId);
    if (!this.isZeroAddress(pairAddr)) {
      let fromR;
      let toR;
      path = [fromToken, toToken]
      let amountInFromContract = await this.RouterContract.getAmountIn(amountTo, path)
      let pairAddr = await this.FactoryContract.getPair(fromToken, toToken)
      let pairContract = new PairContract(this.web3, pairAddr)
      const reserve = await pairContract.getReserves();
      if (Number(fromToken) < Number(toToken)) {
        fromR = reserve[0]
        toR = reserve[1]
      }
      else {
        fromR = reserve[1]
        toR = reserve[0]
      }
      //let tmpImpact = new Dec(amountFrom).div(new Dec(amountFrom).add(new Dec(fromR)));

      let tmpImpact = new Dec(amountTo).div(new Dec(toR).sub(new Dec(amountTo)))
      // console.log("tmpImpact is",tmpImpact)
      if (Number(tmpImpact) > 5 / 100)
        needUseMultihop = true;
      else {
        amountIn = amountInFromContract[0];
        maximumSold = new Dec(amountInFromContract[0]).mul(1 + slippage).floor().toFixed();
        impact = Number(tmpImpact)
      }
    }
    if ((this.isZeroAddress(pairAddr) || needUseMultihop) && (fromToken != WBNBAdress && toToken != WBNBAdress)) {

      path = [fromToken, WBNBAdress, toToken]
      let amountInFromContract = await this.RouterContract.getAmountIn(amountTo, path)

      let pair1Addr = await this.FactoryContract.getPair(WBNBAdress, toToken)
      let pair1Contract = new PairContract(this.web3, pair1Addr)
      const reserve = await pair1Contract.getReserves();
      let fromR;
      let toR;
      if (Number(fromToken) < Number(WBNBAdress)) {
        fromR = reserve[0]
        toR = reserve[1]
      }
      else {
        fromR = reserve[1]
        toR = reserve[0]
      }


      amountIn = amountInFromContract[0];
      maximumSold = (new Dec(amountInFromContract[0]).mul(1 + slippage).floor().toFixed())
      impact = Number(new Dec(amountTo).div(new Dec(toR).sub(new Dec(amountTo))))

    }
    // console.log(
    //   {
    //     amountIn : amountIn,
    //     amountOut :amountTo,
    //     maximumSold: String(maximumSold),
    //     priceImpact: impact,
    //     path : path
    // }
    // )
    return {
      amountIn: amountIn,
      amountOut: amountTo,
      maximumSold: String(maximumSold),
      priceImpact: impact,
      path: path
    };
  }
} 