import { EthAddress, SwapInfoIfInput,SwapInfoIfOutput, uint256 } from "./types"
import RouterAbi from "./abis/Swap/PancakeSwapRouter.json";
import FactoryAbi from "./abis/Swap/PancakeSwapFactory.json";
import PairAbi from "./abis/Swap/PancakeSwapPair.json";
import Dec from "decimal.js";
import { JsonRpcProvider,Contract,InterfaceAbi,ZeroAddress } from "ethers";
import { getAddr } from "./addresses";
import BigNumber from "bignumber.js";

  const RouterAbiItem :InterfaceAbi = RouterAbi
  const FactoryAbiItem : InterfaceAbi = FactoryAbi
  const PairAbiItem :InterfaceAbi = PairAbi

export class RouterContract{
    contractUtil : Contract
    constructor (web3:JsonRpcProvider,address:EthAddress)
    {
        this.contractUtil = new Contract(address,RouterAbiItem,web3);
    }
    async getAmountOut(amount : uint256, path :EthAddress[]) : Promise<any>{
        const res = await this.contractUtil.getAmountsOut(amount,path)
        return res.map((el : string) => BigInt(el).toString());
    }
    async getAmountIn(amount : uint256, path :EthAddress[]) : Promise<any>{
      const res = await this.contractUtil.getAmountsIn(amount,path)
      return res.map((el : string) =>BigInt(el).toString());
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
        fromToken : EthAddress,
        toToken :EthAddress,
        slippage : number,
        amountFrom : uint256
    ): Promise<SwapInfoIfInput>{
        
        let path : EthAddress[] =[];
        let amountOut = "0" ;
        let impact : number =0;
        let minimumReceive = new Dec(0);
        let pairAddr = await this.FactoryContract.getPair(fromToken,toToken)
        let needUseMultihop = false;
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
            let tmpImpact = new Dec(amountFrom).div(new Dec(amountFrom).add(new Dec(fromR)));
            if(Number(tmpImpact) > 5/100)
            {
              needUseMultihop = true;
            }
            amountOut = String(amountOutFromContract[1]);
            minimumReceive = (new Dec(amountOutFromContract[1]).mul(1-slippage).floor());
            impact = Number(tmpImpact)
        }
        if((this.isZeroAddress(pairAddr) || needUseMultihop ) &&(fromToken.toLowerCase() != getAddr("WBNBAdress", this.chainId).toLowerCase() &&  toToken.toLowerCase() !=  getAddr("WBNBAdress", this.chainId).toLowerCase()))
        {
            path = [fromToken, getAddr("WBNBAdress", this.chainId).toLowerCase(),toToken]
            let amountOutFromContract  = await this.RouterContract.getAmountOut(amountFrom,path)
            let pair1Addr = await this.FactoryContract.getPair(fromToken, getAddr("WBNBAdress", this.chainId).toLowerCase())
            let pair1Contract = new PairContract(this.web3,pair1Addr)
            const reserve  = await pair1Contract.getReserves();
            let fromR;
            if(BigNumber(fromToken).isLessThan( getAddr("WBNBAdress", this.chainId).toLowerCase()))
            {
             fromR = reserve[0]
            }
            else 
            {
             fromR = reserve[1]
            }
            amountOut = amountOutFromContract[2];
            minimumReceive = (new Dec(amountOutFromContract[2]).mul(1-slippage).floor())
            impact = Number(new Dec(amountFrom).div(new Dec(amountFrom).add(new Dec(fromR))))

        }  
        return {
            amountIn : amountFrom,
            amountOut : amountOut,
            minimumReceive: String(minimumReceive),
            priceImpact: impact,
            path : path
        };
    }

    async getInformationFromOutput (
      fromToken : EthAddress,
      toToken :EthAddress,
      slippage : number,
      amountTo: uint256
  ): Promise<SwapInfoIfOutput>{
      
      let path : EthAddress[] =[];
      let amountIn :string = "0";
      let impact : number =0;
      let maximumSold ="0";
      let pairAddr = await this.FactoryContract.getPair(fromToken,toToken)
      let needUseMultihop = false;
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
          
          let tmpImpact =new Dec(amountTo).div(new Dec(toR).sub(new Dec(amountTo)))
          if(Number(tmpImpact) > 5/100)
            needUseMultihop = true;
          amountIn = amountInFromContract[0];
          maximumSold = new Dec(amountInFromContract[0]).mul(1+ slippage).floor().toFixed();
          impact = Number(tmpImpact)
      }
      if((this.isZeroAddress(pairAddr) || needUseMultihop ) && (fromToken.toLowerCase() != getAddr("WBNBAdress", this.chainId).toLowerCase() && toToken.toLowerCase() !=  getAddr("WBNBAdress", this.chainId).toLowerCase()))
      {
        
          path = [fromToken, getAddr("WBNBAdress", this.chainId).toLowerCase(),toToken]
          let amountInFromContract  = await this.RouterContract.getAmountIn(amountTo,path)
          
          let pair1Addr = await this.FactoryContract.getPair( getAddr("WBNBAdress", this.chainId).toLowerCase(),toToken)
          let pair1Contract = new PairContract(this.web3,pair1Addr)
          const reserve  = await pair1Contract.getReserves();
          let fromR;
          let toR;
          if(BigNumber(fromToken).isLessThan( getAddr("WBNBAdress", this.chainId).toLowerCase()))
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
          maximumSold = (new Dec(amountInFromContract[0]).mul(1+slippage).floor().toFixed())
          impact = Number(new Dec(amountTo).div(new Dec(toR).sub(new Dec(amountTo))))

      }  
      return {
          amountIn : amountIn,
          amountOut : amountTo,
          maximumSold: String(maximumSold),
          priceImpact: impact,
          path : path
      };
  }
} 