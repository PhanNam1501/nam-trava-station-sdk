
import { ethers } from "ethers";
const abiCoder = new ethers.AbiCoder()
export const OnchainPriceTriggerService = {
    encode(pair: string, tokenIn: string, triggerPrice: string, state: string){
        return [abiCoder.encode(['string', 'string', 'string', 'string'], [pair, tokenIn, triggerPrice, state])];
    },
    
    decode(triggerData: any){
        return [abiCoder.decode(['string', 'string', 'string', 'string'], triggerData)];
    }
}