import { Action } from "../../../Action";
import { uint256 } from "../../../types";
/**
 * TravaGovernanceMerge - Merge Token id in trava governance
 *
 * @category Trava
 */
export declare class TravaGovernanceMerge extends Action {
    constructor(from: uint256, to: uint256, contractAddress?: string);
}
