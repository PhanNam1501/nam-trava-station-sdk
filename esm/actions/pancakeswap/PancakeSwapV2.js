import { Action } from '../../Action';
import { getAddr } from '../../addresses';
/**
 * PancakeSwapV2 - swap token in PancakeSwap
 *
 * @category PancakeSwap
 */
export class PancakeSwapV2 extends Action {
    constructor(amountIn, amountOutMin, path, to, deadline, from) {
        super("PancakeSwapV2", getAddr('PancakeSwapV2'), ["uint256", "uint256", "address[]", "address", "uint256", "address"], [amountIn, amountOutMin, path, to, deadline, from]);
        this.mappableArgs = [amountIn, amountOutMin, path, to, deadline, from].flat();
    }
}
