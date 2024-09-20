
import { ethers } from "ethers";
const abiCoder = new ethers.AbiCoder()
export const TimeTriggerService = {
    encode(startTime: string, endTime: string){
        return [abiCoder.encode(['uint256', 'uint256'], [startTime, endTime])];
    },
    
    decode(triggerData: any){
        return [abiCoder.decode(['uint256', 'uint256'], triggerData)];
    }
}