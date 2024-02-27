import { Action } from '../Action';
import { getAddr } from '../addresses';
import { uint256 } from '../types';

/**
 *
 *
 * @category Triggers
 */
export class TimeTrigger extends Action {
  constructor(startTime: uint256, endTime: uint256, contractAddress?: string) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TimeTrigger') : contractAddress;

    super('TimeTrigger', _contractAddress, ['uint256', 'uint256'], [startTime, endTime]);
  }
}