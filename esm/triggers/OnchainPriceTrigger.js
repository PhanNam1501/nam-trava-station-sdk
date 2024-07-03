import { Action } from '../Action';
import { getAddr } from '../addresses';
/**
 *
 *
 * @category Triggers
 */
export class OnchainPriceTrigger extends Action {
    constructor(pair, tokenIn, triggerPrice, state, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('OnchainPriceTrigger') : contractAddress;
        super('OnchainPriceTrigger', _contractAddress, ['uint256', 'uint256', 'uint256', 'string'], [pair, tokenIn, triggerPrice, state]);
    }
}
