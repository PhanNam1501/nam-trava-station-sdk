import { Action } from '../Action';
import { uint256, EthAddress, uint8 } from '../types';
/**
 *
 *
 * @category Triggers
 */
export declare class AaveV2RatioTrigger extends Action {
    constructor(user: EthAddress, market: EthAddress, ratio: uint256, state: uint8, contractAddress?: string);
}
