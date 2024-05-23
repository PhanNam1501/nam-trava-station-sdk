import { Action } from '../Action';
import { getAddr } from '../addresses';
/**
 *
 *
 * @category Triggers
 */
export class TimeTrigger extends Action {
    constructor(startTime, endTime, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TimeTrigger') : contractAddress;
        super('TimeTrigger', _contractAddress, ['uint256', 'uint256'], [startTime, endTime]);
    }
}
