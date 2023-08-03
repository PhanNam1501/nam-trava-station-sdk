import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * Transfers specified token from recipe (DsProxy) to specified address unwraps if Weth address
 *
 * @category BasicActions
 */
export class SendTokenAndUnwrapAction extends Action {
  /**
   * @param token Token address
   * @param to Transfer recipient
   * @param amount Transfer amount (-1 for whole Recipe (DsProxy) balance)
   */
  constructor(token:EthAddress, to:EthAddress, amount:uint256) {
    requireAddress(to);
    super(
      'SendTokenAndUnwrap',
      getAddr('SendTokenAndUnwrap'),
      [
        'address',
        'address',
        'uint',
      ],
      [token, to, amount],
    );
  }
}