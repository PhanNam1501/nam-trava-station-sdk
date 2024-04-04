import { EthAddress, uint256 } from "../types";
export declare const AutoCompoundStrategySub: {
    encodeForStartgySubWithGas(rewardPool: EthAddress, claimTo: EthAddress, amountClaim: uint256, stakingPool: EthAddress, stakeOnBehalfOf: EthAddress, amountStake: uint256, from: EthAddress, gasUsed: uint256, feeToken: EthAddress, availableAmount: uint256, dfsFeeDivider: uint256, path: Array<EthAddress>, startTime: uint256, endTime: uint256, startegyIdOrBundle: uint256, isBundle: boolean): (string | boolean | string[])[];
    encodeForStrategySub(vaultAddress: EthAddress, claimTo: EthAddress, stakeOnBehalfOf: EthAddress, from: EthAddress, startTime: uint256, endTime: uint256, startegyIdOrBundle: uint256): (string | boolean | string[])[];
};
