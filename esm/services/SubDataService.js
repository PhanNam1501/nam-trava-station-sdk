import { ethers } from "ethers";
const abiCoder = new ethers.AbiCoder();
export const AutoCompoundSubData = {
    encode(stakingPool, claimTo, amountClaim, stakeOnBehalfOf, amountStake, from, gasUsed, feeToken, availableAmount, dfsFeeDivider, path) {
        const stakingPoolEncoded = abiCoder.encode(['address'], [stakingPool]);
        const claimToEncoded = abiCoder.encode(['address'], [claimTo]);
        const amountClaimEncoded = abiCoder.encode(['uint256'], [amountClaim]);
        const stakeOnBehalfOfEncoded = abiCoder.encode(['address'], [stakeOnBehalfOf]);
        const amountStakeEncoded = abiCoder.encode(['uint256'], [amountStake]);
        const fromEncoded = abiCoder.encode(['address'], [from]);
        const gasUsedEncoded = abiCoder.encode(['uint256'], [gasUsed]);
        const feeTokenEncoded = abiCoder.encode(['address'], [feeToken]);
        const availableAmountEncoded = abiCoder.encode(['uint256'], [availableAmount]);
        const dfsFeeDividerEncoded = abiCoder.encode(['uint256'], [dfsFeeDivider]);
        const path0Encoded = abiCoder.encode(['address'], [path[0]]);
        const path1Encoded = abiCoder.encode(['address'], [path[1]]);
        return [stakingPoolEncoded, claimToEncoded, amountClaimEncoded, stakingPoolEncoded, stakeOnBehalfOfEncoded, amountStakeEncoded, fromEncoded, gasUsedEncoded, feeTokenEncoded, availableAmountEncoded, dfsFeeDividerEncoded, path0Encoded, path1Encoded];
    }
};
