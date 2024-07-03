import { EthAddress, uint256 } from "../types";
export declare const AutoSwapStrategySub: {
    encodeForStartgySubWithGas(pancakeSwapV2: EthAddress, amountIn: uint256, amountOutMin: uint256, pathSwap: Array<EthAddress>, to: EthAddress, deadline: uint256, from: EthAddress, gasUsed: uint256, feeToken: EthAddress, availableAmount: uint256, dfsFeeDivider: uint256, path: Array<EthAddress>, pair: EthAddress, tokenIn: EthAddress, triggerPrice: uint256, state: string, startegyIdOrBundle: uint256, isBundle: boolean): (string | boolean | string[])[];
    encodeForStrategySub(pancakeSwapV2: EthAddress, amountIn: uint256, amountOutMin: uint256, pathSwap: Array<EthAddress>, to: EthAddress, deadline: uint256, from: EthAddress, pair: EthAddress, tokenIn: EthAddress, triggerPrice: uint256, state: string, startegyIdOrBundle: uint256): (string | boolean | string[])[];
};
