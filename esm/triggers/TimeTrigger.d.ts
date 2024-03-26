import { Action } from '../Action';
import { uint256 } from '../types';
/**
 *
 *
 * @category Triggers
 */
export declare class TimeTrigger extends Action {
    constructor(startTime: uint256, endTime: uint256, contractAddress?: string);
}
