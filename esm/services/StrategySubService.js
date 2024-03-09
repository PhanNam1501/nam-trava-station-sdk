import { AutoCompoundSubData } from "./SubDataService";
import { TimeTriggerService } from "./TriggerDataService";
import { ethers } from "ethers";
const abiCoder = new ethers.AbiCoder();
export const AutoCompoundStrategySub = {
    autoCompoundStrategySub(stakingPool, claimTo, amountClaim, stakeOnBehalfOf, amountStake, from, gasUsed, feeToken, availableAmount, dfsFeeDivider, path, startTime, endTime, startegyIdOrBundle, isBundle) {
        const subData = AutoCompoundSubData.encode(stakingPool, claimTo, amountClaim, stakeOnBehalfOf, amountStake, from, gasUsed, feeToken, availableAmount, dfsFeeDivider, path);
        const triggerData = TimeTriggerService.encode(startTime, endTime);
        return [startegyIdOrBundle, isBundle, triggerData, subData];
    }
};
