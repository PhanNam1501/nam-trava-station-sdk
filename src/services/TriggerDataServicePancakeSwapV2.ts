
import { ethers } from "ethers";
const abiCoder = new ethers.AbiCoder()
export const OnchainPriceTriggerService = {
    encode(pair: string, tokenIn: string, triggerPrice: string, state: string){
        return [abiCoder.encode(['address', 'address', 'uint256', 'uint8'], [pair, tokenIn, triggerPrice, state])];
    },
    
    decode(triggerData: any){
        return [abiCoder.decode(['address', 'address', 'uint256', 'uint8'], triggerData)];
    }
}