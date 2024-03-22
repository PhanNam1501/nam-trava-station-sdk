import { EthAddress, uint256 } from "../types";
export declare const AutoCompoundSubData: {
    encodeForSubDataWithGas(stakingPool: EthAddress, claimTo: EthAddress, amountClaim: uint256, stakeOnBehalfOf: EthAddress, amountStake: uint256, from: EthAddress, gasUsed: uint256, feeToken: EthAddress, availableAmount: uint256, dfsFeeDivider: uint256, path: Array<EthAddress>): string[];
    encodeForSubData(vaultAddress: EthAddress, claimTo: EthAddress, stakeOnBehalfOf: EthAddress, from: EthAddress): string[];
};
