import { EthAddress, uint256 } from "./types"
import { AbiItem,StateMutabilityType,AbiType } from "web3-utils";
import RouterAbi from "./abis/Swap/PancakeSwapRouter.json";
import FactoryAbi from "./abis/Swap/PancakeSwapFactory.json";
import PairAbi from "./abis/Swap/PancakeSwapPair.json";

export const PancakeSwapV2Address = {
    RouterAddress:"0xD99D1c33F9fC3444f8101754aBC46c52416550D1",
    FactoryAddress:"0x6725f303b657a9451d8ba641348b6761a6cc7a17",
    WBNBAdress:"0xae13d989dac2f0debff460ac112a837c89baa7cd"
}
type SwapParam ={
 amountOutMin:uint256,
 path : EthAddress[],  
}

export const getToAssetAmount = async(
    fromAsset : EthAddress,
    toAsset : EthAddress,
    fromAmount :uint256,
    slippage : number
)=>{
    let frompool;
    let topool;
}