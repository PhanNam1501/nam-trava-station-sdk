import { ethers } from "ethers";
const abiCoder = new ethers.AbiCoder();
const MAX_UINT256 = ethers.MaxUint256;
export const AutoSwapSubData = {
    encodeForSubDataWithGas(pancakeSwapV2, amountIn, amountOutMin, pathSwap, to, deadline, from, gasUsed, feeToken, availableAmount, dfsFeeDivider, path) {
        const pancakeSwapV2Encoded = abiCoder.encode(['address'], [pancakeSwapV2]);
        const amountInEncoded = abiCoder.encode(['uint256'], [amountIn]);
        const amountOutMinEncoded = abiCoder.encode(['uint256'], [amountOutMin]);
        const pathSwap0Encoded = abiCoder.encode(['address'], [pathSwap[0]]);
        const toEncoded = abiCoder.encode(['address'], [to]);
        const deadlineEncoded = abiCoder.encode(['uint256'], [deadline]);
        const fromEncoded = abiCoder.encode(['address'], [from]);
        const gasUsedEncoded = abiCoder.encode(['uint256'], [gasUsed]);
        const feeTokenEncoded = abiCoder.encode(['address'], [feeToken]);
        const availableAmountEncoded = abiCoder.encode(['uint256'], [availableAmount]);
        const dfsFeeDividerEncoded = abiCoder.encode(['uint256'], [dfsFeeDivider]);
        const path0Encoded = abiCoder.encode(['address'], [path[0]]);
        const path1Encoded = abiCoder.encode(['address'], [path[1]]);
        return [pancakeSwapV2Encoded, amountInEncoded, amountOutMinEncoded, pathSwap0Encoded, toEncoded, deadlineEncoded, fromEncoded, gasUsedEncoded, feeTokenEncoded, availableAmountEncoded, dfsFeeDividerEncoded, path0Encoded, path1Encoded];
    },
    encodeForSubData(pancakeSwapV2, amountIn, amountOutMin, pathSwap, to, deadline, from) {
        const pancakeSwapV2Encoded = abiCoder.encode(['address'], [pancakeSwapV2]);
        const amountInEncoded = abiCoder.encode(['uint256'], [amountIn]);
        const amountOutMinEncoded = abiCoder.encode(['uint256'], [amountOutMin]);
        const pathSwap0Encoded = abiCoder.encode(['address'], [pathSwap[0]]);
        const toEncoded = abiCoder.encode(['address'], [to]);
        const deadlineEncoded = abiCoder.encode(['uint256'], [deadline]);
        const fromEncoded = abiCoder.encode(['address'], [from]);
        return [pancakeSwapV2Encoded, amountInEncoded, amountOutMinEncoded, pathSwap0Encoded, toEncoded, deadlineEncoded, fromEncoded];
    }
};
