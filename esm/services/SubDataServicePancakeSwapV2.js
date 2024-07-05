import { ethers } from "ethers";
const abiCoder = new ethers.AbiCoder();
const MAX_UINT256 = ethers.MaxUint256;
export const AutoSwapSubData = {
    encodeForSubDataWithGas(pancakeSwapV2, amountIn, amountOutMin, pathSwap, to, deadline, from, gasUsed, feeToken, availableAmount, dfsFeeDivider, path) {
        const pancakeSwapV2Encoded = abiCoder.encode(['address'], [pancakeSwapV2]);
        const amountInEncoded = abiCoder.encode(['uint256'], [amountIn]);
        const amountOutMinEncoded = abiCoder.encode(['uint256'], [amountOutMin]);
        const pathSwapEncode = pathSwap.map(e => abiCoder.encode(['address'], [e]));
        const toEncoded = abiCoder.encode(['address'], [to]);
        const deadlineEncoded = abiCoder.encode(['uint256'], [deadline]);
        const fromEncoded = abiCoder.encode(['address'], [from]);
        const gasUsedEncoded = abiCoder.encode(['uint256'], [gasUsed]);
        const feeTokenEncoded = abiCoder.encode(['address'], [feeToken]);
        const availableAmountEncoded = abiCoder.encode(['uint256'], [availableAmount]);
        const dfsFeeDividerEncoded = abiCoder.encode(['uint256'], [dfsFeeDivider]);
        const pathEncode = path.map(e => abiCoder.encode(['address'], [e]));
        return [
            amountInEncoded,
            amountOutMinEncoded,
            ...pathSwapEncode,
            toEncoded,
            deadlineEncoded,
            fromEncoded,
            gasUsedEncoded,
            feeTokenEncoded,
            availableAmountEncoded,
            dfsFeeDividerEncoded,
            ...pathEncode
        ];
    },
    encodeForSubData(pancakeSwapV2, amountIn, amountOutMin, pathSwap, to, deadline, from) {
        const pancakeSwapV2Encoded = abiCoder.encode(['address'], [pancakeSwapV2]);
        const amountInEncoded = abiCoder.encode(['uint256'], [amountIn]);
        const amountOutMinEncoded = abiCoder.encode(['uint256'], [amountOutMin]);
        const pathSwapEncode = pathSwap.map(e => abiCoder.encode(['address'], [e]));
        const toEncoded = abiCoder.encode(['address'], [to]);
        const deadlineEncoded = abiCoder.encode(['uint256'], [deadline]);
        const fromEncoded = abiCoder.encode(['address'], [from]);
        return [
            amountInEncoded,
            amountOutMinEncoded,
            ...pathSwapEncode,
            toEncoded,
            deadlineEncoded,
            fromEncoded,
        ];
    }
};
