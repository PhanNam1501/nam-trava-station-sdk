import { EthAddress, uint256 } from "../types";
import { AutoCompoundSubData } from "./SubDataService";
import { TimeTriggerService } from "./TriggerDataService";
import { ethers } from "ethers";
const abiCoder = new ethers.AbiCoder();

export const AutoCompoundStrategySub = {
    autoCompoundStrategySub(
        stakingPool: EthAddress,
        claimTo: EthAddress,
        amountClaim: uint256,
        stakeOnBehalfOf: EthAddress,
        amountStake: uint256,
        from: EthAddress,
        gasUsed: uint256,
        feeToken: EthAddress,
        availableAmount: uint256,
        dfsFeeDivider: uint256,
        path: Array<EthAddress>,
        startTime: uint256, 
        endTime:uint256,
        startegyIdOrBundle: uint256,
        isBundle: boolean,
    ) {
        const subData = AutoCompoundSubData.encode(stakingPool, claimTo, amountClaim, stakeOnBehalfOf, amountStake, from, gasUsed, feeToken, availableAmount, dfsFeeDivider, path);
        const triggerData = TimeTriggerService.encode(startTime, endTime);

        return [startegyIdOrBundle, isBundle, triggerData, subData];
    }
}