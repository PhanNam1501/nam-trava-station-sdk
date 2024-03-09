import { EthAddress, uint256 } from "../types";
export declare const AutoCompoundSubData: {
    encode(stakingPool: EthAddress, claimTo: EthAddress, amountClaim: uint256, stakeOnBehalfOf: EthAddress, amountStake: uint256, from: EthAddress, gasUsed: uint256, feeToken: EthAddress, availableAmount: uint256, dfsFeeDivider: uint256, path: Array<EthAddress>): string[];
};
