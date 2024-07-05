import { ethers } from "ethers";
const abiCoder = new ethers.AbiCoder();
export const OnchainPriceTriggerService = {
    encode(pair, tokenIn, triggerPrice, state) {
        return [abiCoder.encode(['address', 'address', 'uint256', 'uint8'], [pair, tokenIn, triggerPrice, state])];
    },
    decode(triggerData) {
        return [abiCoder.decode(['address', 'address', 'uint256', 'uint8'], triggerData)];
    }
};
