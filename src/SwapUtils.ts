import { EthAddress, SwapInfoIfInput,SwapInfoIfOutput, uint256 } from "./types"
import RouterAbi from "./abis/Swap/PancakeSwapRouter.json";
import FactoryAbi from "./abis/Swap/PancakeSwapFactory.json";
import PairAbi from "./abis/Swap/PancakeSwapPair.json";
import Dec from "decimal.js";
import { JsonRpcProvider,Contract,InterfaceAbi,ZeroAddress } from "ethers";
import { convertHexStringToAddress, getAddr } from "./addresses";
import BigNumber from "bignumber.js";

  const RouterAbiItem :InterfaceAbi = RouterAbi
  const FactoryAbiItem : InterfaceAbi = FactoryAbi
  const PairAbiItem :InterfaceAbi = PairAbi

export class RouterContract{
    contractUtil : Contract
    constructor (web3:JsonRpcProvider, address:EthAddress)
    {
        this.contractUtil = new Contract(address, RouterAbiItem, web3);
    }
    async getAmountOut(amount : uint256, path :EthAddress[]) : Promise<any>{
        const res = await this.contractUtil.getAmountsOut(amount,path)
        return res.map((el : string) => BigNumber(el).toFixed());
    }
    async getAmountIn(amount : uint256, path :EthAddress[]) : Promise<any>{
      const res = await this.contractUtil.getAmountsIn(amount,path)
      return res.map((el : string) => BigNumber(el).toFixed());
  }

}
export class FactoryContract{
    contractUtil : Contract
    constructor (web3:JsonRpcProvider,address:EthAddress)
    {
        this.contractUtil = new Contract(address,FactoryAbiItem,web3);
    }
    async getPair (addr1:EthAddress,addr2:EthAddress) :Promise<any>
    {
        const res = await this.contractUtil.getPair(addr1,addr2)
        return res
    }
}

export class PairContract{
    contractUtil : Contract
    constructor (web3:JsonRpcProvider,address:EthAddress)
    {
        this.contractUtil = new Contract(address,PairAbiItem,web3);
    }
    async getReserves () : Promise<any>{
        const res = await this.contractUtil.getReserves();
        return res.map((el :any) =>new Dec(String(el)).toFixed());
    }
}
export class SwapUtil {
    web3: JsonRpcProvider;
    FactoryContract : FactoryContract;
    RouterContract  : RouterContract;
    chainId: number;

    constructor(_rpc: string, _chainId: number){
        this.web3 = new JsonRpcProvider(_rpc);
        this.chainId = _chainId;
        this.FactoryContract = new FactoryContract(this.web3, getAddr("FactoryAddress", this.chainId))
        this.RouterContract = new RouterContract(this.web3, getAddr("RouterAddress", this.chainId))
    }

    isZeroAddress(address : EthAddress) : boolean{
        return address.toLowerCase() === ZeroAddress
    }

    async getInformationFromInput (
        _fromToken : EthAddress,
        _toToken :EthAddress,
        slippage : number,
        amountFrom : uint256
    ): Promise<SwapInfoIfInput>{
        let fromToken = convertHexStringToAddress(_fromToken);
        let toToken = convertHexStringToAddress(_toToken);
        let path : EthAddress[] =[];
        let amountOut = "0" ;
        let impact = BigNumber(0);
        let minimumReceive = BigNumber(0);
        let pairAddr = await this.FactoryContract.getPair(fromToken,toToken)
        let needUseMultihop = false;
        let WBNBAddress = getAddr("WBNBAdress", this.chainId);
        if(!this.isZeroAddress(pairAddr))
        {
            let fromR;
            let toR;
            path = [fromToken,toToken]
            let pairAddr = await this.FactoryContract.getPair(fromToken,toToken)
            let pairContract = new PairContract(this.web3,pairAddr)
            const reserve  = await pairContract.getReserves();
            let amountOutFromContract  = await this.RouterContract.getAmountOut(amountFrom,path)
            if(BigNumber(fromToken).isLessThan(toToken))
            {
             fromR = String(reserve[0])
             toR = String(reserve[1])
            }
            else 
            {
             fromR = String(reserve[1])
             toR =String(reserve[0])
            }
            let tmpImpact = BigNumber(amountFrom).div(BigNumber(amountFrom).plus(fromR));
            if(Number(tmpImpact) > 5/100)
            {
              needUseMultihop = true;
            }
            amountOut = String(amountOutFromContract[1]);
            minimumReceive = (BigNumber(amountOutFromContract[1]).multipliedBy(1-slippage));
            impact = tmpImpact
        }
        if((this.isZeroAddress(pairAddr) || needUseMultihop ) &&(fromToken.toLowerCase() != WBNBAddress.toLowerCase() &&  toToken.toLowerCase() !=  WBNBAddress.toLowerCase()))
        {
            path = [fromToken, WBNBAddress, toToken]
            let amountOutFromContract  = await this.RouterContract.getAmountOut(amountFrom,path)
            let pair1Addr = await this.FactoryContract.getPair(fromToken, WBNBAddress)
            let pair1Contract = new PairContract(this.web3,pair1Addr)
            const reserve  = await pair1Contract.getReserves();
            let fromR;
            if(BigNumber(fromToken).isLessThan( WBNBAddress))
            {
             fromR = reserve[0]
            }
            else 
            {
             fromR = reserve[1]
            }
            amountOut = amountOutFromContract[2];
            minimumReceive = (BigNumber(amountOutFromContract[2]).multipliedBy(1-slippage))
            impact = (BigNumber(amountFrom).div(BigNumber(amountFrom).plus(fromR)))

        }  
        return {
            amountIn : amountFrom,
            amountOut : amountOut,
            minimumReceive: minimumReceive.toFixed(0),
            priceImpact: impact.toNumber(),
            path : path
        };
    }

    async getInformationFromOutput (
      _fromToken : EthAddress,
      _toToken :EthAddress,
      slippage : number,
      amountTo: uint256
  ): Promise<SwapInfoIfOutput>{
      let fromToken = convertHexStringToAddress(_fromToken);
      let toToken = convertHexStringToAddress(_toToken);
      let path : EthAddress[] =[];
      let amountIn :string = "0";
      let impact = BigNumber(0);
      let maximumSold = BigNumber(0);
      let pairAddr = await this.FactoryContract.getPair(fromToken,toToken)
      let needUseMultihop = false;
      let WBNBAddress = getAddr("WBNBAdress", this.chainId);
      if(!this.isZeroAddress(pairAddr))
      {
          let fromR;
          let toR;
          path = [fromToken,toToken]
          let amountInFromContract  = await this.RouterContract.getAmountIn(amountTo,path)
          let pairAddr = await this.FactoryContract.getPair(fromToken,toToken)
          let pairContract = new PairContract(this.web3,pairAddr)
          const reserve  = await pairContract.getReserves();
          if(BigNumber(fromToken).isLessThan(toToken))
          {
           fromR = reserve[0]
           toR = reserve[1]
          }
          else 
          {
           fromR = reserve[1]
           toR =reserve[0]
          }
          
          let tmpImpact =BigNumber(amountTo).div(BigNumber(toR).minus(amountTo))
          if(Number(tmpImpact) > 5/100)
            needUseMultihop = true;
          amountIn = amountInFromContract[0];
          maximumSold = BigNumber(amountInFromContract[0]).multipliedBy(1+ slippage);
          impact = tmpImpact
      }
      if((this.isZeroAddress(pairAddr) || needUseMultihop ) && (fromToken.toLowerCase() != WBNBAddress.toLowerCase() && toToken.toLowerCase() !=  WBNBAddress.toLowerCase()))
      {
        
          path = [fromToken, WBNBAddress,toToken]
          let amountInFromContract  = await this.RouterContract.getAmountIn(amountTo,path)
          
          let pair1Addr = await this.FactoryContract.getPair( WBNBAddress,toToken)
          let pair1Contract = new PairContract(this.web3,pair1Addr)
          const reserve  = await pair1Contract.getReserves();
          let fromR;
          let toR;
          if(BigNumber(fromToken).isLessThan( WBNBAddress))
          {
           fromR = reserve[0]
           toR = reserve[1]
          }
          else 
          {
           fromR = reserve[1]
           toR = reserve [0]
          }
         
         
          amountIn = amountInFromContract[0];
          maximumSold = BigNumber(amountInFromContract[0]).multipliedBy(1+slippage)
          impact = (BigNumber(amountTo).div(BigNumber(toR).minus(amountTo)))

      }  
      return {
          amountIn : amountIn,
          amountOut : amountTo,
          maximumSold: maximumSold.toFixed(0),
          priceImpact: impact.toNumber(),
          path : path
      };
  }
} 