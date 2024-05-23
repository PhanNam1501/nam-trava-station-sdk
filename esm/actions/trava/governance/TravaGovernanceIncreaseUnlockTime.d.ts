import { Action } from "../../../Action";
import { uint256 } from "../../../types";
/**
<<<<<<< HEAD
 * TravaGovernanceIncreaseUnlockTime - Borrow Token in Lending Pool
=======
 * TravaGovernanceIncreaseUnlockTime - Increase unlock time in governance
>>>>>>> origin/ngan-sdk
 *
 * @category Trava
 */
export declare class TravaGovernanceIncreaseUnlockTime extends Action {
    constructor(tokenId: uint256, duration: uint256, contractAddress?: string);
}
