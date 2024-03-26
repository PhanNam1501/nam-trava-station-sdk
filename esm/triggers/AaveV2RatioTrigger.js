import { Action } from '../Action';
import { getAddr } from '../addresses';
/**
 *
 *
 * @category Triggers
 */
export class AaveV2RatioTrigger extends Action {
    constructor(user, market, ratio, state, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('AaveV2RatioTrigger') : contractAddress;
        super('AaveV2RatioTrigger', _contractAddress, ['address', 'address', 'uint256', 'uint8'], [user, market, ratio, state]);
    }
}
