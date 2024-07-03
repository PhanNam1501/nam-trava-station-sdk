import { Action } from '../Action';
import { uint256 } from '../types';
/**
 *
 *
 * @category Triggers
 */
export declare class OnchainPriceTrigger extends Action {
    constructor(pair: uint256, tokenIn: uint256, triggerPrice: uint256, state: string, contractAddress?: string);
}
