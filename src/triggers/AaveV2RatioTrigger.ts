import { Action } from '../Action';
import { getAddr } from '../addresses';
import { uint256, EthAddress, uint8 } from '../types';

/**
 *
 *
 * @category Triggers
 */
export class AaveV2RatioTrigger extends Action {
    constructor(user: EthAddress, market: EthAddress, ratio: uint256, state: uint8, contractAddress?: string) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('AaveV2RatioTrigger') : contractAddress;

        super('AaveV2RatioTrigger', _contractAddress, ['address', 'address', 'uint256', 'uint8'], [user, market, ratio, state]);
    }
}