import { ethers } from "ethers";
const abiCoder = new ethers.AbiCoder();
export const TimeTriggerService = {
    encode(startTime, endTime) {
        return [abiCoder.encode(['uint256', 'uint256'], [startTime, endTime])];
    }
};