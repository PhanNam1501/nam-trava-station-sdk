import { EthAddress, uint256 } from "../types";
export declare const AutoSwapSubData: {
    encodeForSubDataWithGas(pancakeSwapV2: EthAddress, amountIn: uint256, amountOutMin: uint256, pathSwap: Array<EthAddress>, to: EthAddress, deadline: uint256, from: EthAddress, gasUsed: uint256, feeToken: EthAddress, availableAmount: uint256, dfsFeeDivider: uint256, path: Array<EthAddress>): string[];
    encodeForSubData(pancakeSwapV2: EthAddress, amountIn: uint256, amountOutMin: uint256, pathSwap: Array<EthAddress>, to: EthAddress, deadline: uint256, from: EthAddress): string[];
};
