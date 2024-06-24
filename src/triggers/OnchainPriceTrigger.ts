import { Action } from '../Action';
import { getAddr } from '../addresses';
import { uint256 } from '../types';

/**
 *
 *
 * @category Triggers
 */
export class OnchainPriceTrigger extends Action {
  constructor(pair: uint256, tokenIn: uint256, triggerPrice: uint256, state: string, contractAddress?: string) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('OnchainPriceTrigger') : contractAddress;
    super('OnchainPriceTrigger', _contractAddress, ['uint256', 'uint256', 'uint256', 'string'], [pair, tokenIn, triggerPrice, state]);
  }
}