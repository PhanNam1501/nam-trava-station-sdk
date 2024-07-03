import { ethers } from "ethers";
const abiCoder = new ethers.AbiCoder();
export const OnchainPriceTriggerService = {
    encode(pair, tokenIn, triggerPrice, state) {
        return [abiCoder.encode(['string', 'string', 'string', 'string'], [pair, tokenIn, triggerPrice, state])];
    },
    decode(triggerData) {
        return [abiCoder.decode(['string', 'string', 'string', 'string'], triggerData)];
    }
};
