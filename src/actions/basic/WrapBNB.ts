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
  constructor(amount: uint256, contractAddress?: string) {

    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('WrapBnb') : contractAddress;

    super(
      'WrapBnb',
      _contractAddress, //getAddr('WrapBnb'),
      ['uint256'],
      [amount]
    );
  }

  async getEthValue() {
    return this.args[0];
  }
}