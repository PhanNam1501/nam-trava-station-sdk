import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * Unwraps a specified amount of WETH from the proxy
 *
 * @category BasicActions
 */
export class UnwrapBnbAction extends Action {
  /**
   * @param amount Amount to unwrap
   * @param to Transfer recipient
   */
  constructor(amount:uint256, to:EthAddress) {
    requireAddress(to);
    super(
      'UnwrapBnb',
      getAddr('UnwrapBnb'),
      [
        'uint256',
        'address',
      ],
      [amount, to],
    );
  }
}