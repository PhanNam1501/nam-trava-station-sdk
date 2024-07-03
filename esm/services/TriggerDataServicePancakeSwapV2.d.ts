import { ethers } from "ethers";
export declare const OnchainPriceTriggerService: {
    encode(pair: string, tokenIn: string, triggerPrice: string, state: string): string[];
    decode(triggerData: any): ethers.Result[];
};
