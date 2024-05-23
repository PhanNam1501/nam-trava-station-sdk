import { SubDataService, TriggerDataService } from ".";
export const AutoCompoundStrategySub = {
    encodeForStartgySubWithGas(rewardPool, claimTo, amountClaim, stakingPool, stakeOnBehalfOf, amountStake, from, gasUsed, feeToken, availableAmount, dfsFeeDivider, path, startTime, endTime, startegyIdOrBundle, isBundle) {
        const subData = SubDataService.AutoCompoundSubData.encodeForSubDataWithGas(rewardPool, claimTo, amountClaim, stakingPool, stakeOnBehalfOf, amountStake, from, gasUsed, feeToken, availableAmount, dfsFeeDivider, path);
        const triggerData = TriggerDataService.TimeTriggerService.encode(startTime, endTime);
        return [startegyIdOrBundle, isBundle, triggerData, subData];
    },
    encodeForStrategySub(vaultAddress, claimTo, stakeOnBehalfOf, from, startTime, endTime, startegyIdOrBundle) {
        const subData = SubDataService.AutoCompoundSubData.encodeForSubData(vaultAddress, claimTo, stakeOnBehalfOf, from);
        const triggerData = TriggerDataService.TimeTriggerService.encode(startTime, endTime);
        const isBundle = false;
        return [startegyIdOrBundle, isBundle, triggerData, subData];
    }
};
