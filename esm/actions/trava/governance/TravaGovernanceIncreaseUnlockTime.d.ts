import { Action } from "../../../Action";
import { uint256 } from "../../../types";
/**
 * TravaGovernanceIncreaseUnlockTime - Borrow Token in Lending Pool
 *
 * @category Trava
 */
export declare class TravaGovernanceIncreaseUnlockTime extends Action {
    constructor(tokenId: uint256, duration: uint256, contractAddress?: string);
}
