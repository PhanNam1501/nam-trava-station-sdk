import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint256 } from '../../types';

/**
 * Wraps a specified amount of ETH from the wallet to WETH on the recipe
 *
 * @category BasicActions
 */
export class WrapBnbAction extends Action {
  /**
   * @param amount Wrap amount
   */
  constructor(amount:uint256) {
    super('WrapBnb', getAddr('WrapBnb'), ['uint256'], [amount]);
  }

  async getEthValue() {
    return this.args[0];
  }
}