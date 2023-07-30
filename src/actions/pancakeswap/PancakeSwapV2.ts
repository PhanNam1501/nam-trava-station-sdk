import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes } from '../../types';

/**
 * PancakeSwapV2 - swap token in PancakeSwap
 *
 * @category PancakeSwap
 */
export class PancakeSwapV2 extends Action {
  constructor(amountIn: uint256, amountOutMin: uint256, path: bytes, to: EthAddress, deadline: uint256, from: EthAddress) {
    super(
      "PancakeSwapV2",
      getAddr('PancakeSwapV2'),
      ["uint256", "uint256", "address[]", "address", "uint256", "address"],
      [amountIn, amountOutMin, path, to, deadline, from]
    );
    this.mappableArgs = [amountIn, amountOutMin, path, to, deadline, from].flat();
  }
}