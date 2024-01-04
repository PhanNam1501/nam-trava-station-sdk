import { Action } from "../../../Action";
import { EthAddress, uint256 } from "../../../types";
/**
<<<<<<< HEAD
 * TravaGovernanceCreateLock - Borrow Token in Lending Pool
=======
 * TravaGovernanceCreateLock - Create lock in governance
>>>>>>> origin/ngan/sdk
 *
 * @category Trava
 */
export declare class TravaGovernanceCreateLock extends Action {
    constructor(token: EthAddress, value: uint256, lock_duration: uint256, to: EthAddress, from: EthAddress, contractAddress?: string);
}
