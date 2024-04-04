import { AutoCompoundSubData } from "./SubDataService";
import { TimeTriggerService } from "./TriggerDataService";
import { ethers } from "ethers";
const abiCoder = new ethers.AbiCoder();
const MAX_UINT256 = ethers.MaxUint256;
export const AutoCompoundStrategySub = {
    encodeForStartgySubWithGas(rewardPool, claimTo, amountClaim, stakingPool, stakeOnBehalfOf, amountStake, from, gasUsed, feeToken, availableAmount, dfsFeeDivider, path, startTime, endTime, startegyIdOrBundle, isBundle) {
        const subData = AutoCompoundSubData.encodeForSubDataWithGas(rewardPool, claimTo, amountClaim, stakingPool, stakeOnBehalfOf, amountStake, from, gasUsed, feeToken, availableAmount, dfsFeeDivider, path);
        const triggerData = TimeTriggerService.encode(startTime, endTime);
        return [startegyIdOrBundle, isBundle, triggerData, subData];
    },
    encodeForStrategySub(vaultAddress, claimTo, stakeOnBehalfOf, from, startTime, endTime, startegyIdOrBundle) {
        const subData = AutoCompoundSubData.encodeForSubData(vaultAddress, claimTo, stakeOnBehalfOf, from);
        const triggerData = TimeTriggerService.encode(startTime, endTime);
        const isBundle = false;
        return [startegyIdOrBundle, isBundle, triggerData, subData];
    }
};
