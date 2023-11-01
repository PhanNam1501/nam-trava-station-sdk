import { Action } from "../../../Action";
import { uint256 } from "../../../types";
/**
 * TravaGovernanceIncreaseUnlockTime - Increase unlock time in governance
 *
 * @category Trava
 */
export declare class TravaGovernanceIncreaseUnlockTime extends Action {
    constructor(tokenId: uint256, lock_duration: uint256, contractAddress?: string);
}
