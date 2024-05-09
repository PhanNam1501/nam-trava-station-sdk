import { ethers } from "ethers";
export declare const TimeTriggerService: {
    encode(startTime: string, endTime: string): string[];
    decode(triggerData: any): ethers.Result[];
};
