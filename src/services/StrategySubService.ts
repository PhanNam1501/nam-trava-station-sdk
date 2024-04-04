import { EthAddress, uint256 } from "../types";
import { AutoCompoundSubData } from "./SubDataService";
import { TimeTriggerService } from "./TriggerDataService";
import { ethers } from "ethers";
const abiCoder = new ethers.AbiCoder();
const MAX_UINT256 = ethers.MaxUint256;

export const AutoCompoundStrategySub = {
    encodeForStartgySubWithGas(
        rewardPool: EthAddress,
        claimTo: EthAddress,
        amountClaim: uint256,
        stakingPool:EthAddress,
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
        const subData = AutoCompoundSubData.encodeForSubDataWithGas(rewardPool, claimTo, amountClaim, stakingPool, stakeOnBehalfOf, amountStake, from, gasUsed, feeToken, availableAmount, dfsFeeDivider, path);
        const triggerData = TimeTriggerService.encode(startTime, endTime);

        return [startegyIdOrBundle, isBundle, triggerData, subData];
    },

    encodeForStrategySub(
        vaultAddress: EthAddress,
        claimTo: EthAddress,
        stakeOnBehalfOf: EthAddress,
        from: EthAddress,
        startTime: uint256, 
        endTime:uint256,
        startegyIdOrBundle: uint256
    ){
        const subData = AutoCompoundSubData.encodeForSubData(vaultAddress, claimTo, stakeOnBehalfOf, from);
        const triggerData = TimeTriggerService.encode(startTime, endTime);
        const isBundle = false;
        
        return [startegyIdOrBundle, isBundle, triggerData, subData];
    }
}
