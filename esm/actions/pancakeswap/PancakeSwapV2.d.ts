import { Action } from '../../Action';
import { EthAddress, uint256, bytes } from '../../types';
/**
 * PancakeSwapV2 - swap token in PancakeSwap
 *
 * @category PancakeSwap
 */
export declare class PancakeSwapV2 extends Action {
    constructor(amountIn: uint256, amountOutMin: uint256, path: bytes, to: EthAddress, deadline: uint256, from: EthAddress);
}
