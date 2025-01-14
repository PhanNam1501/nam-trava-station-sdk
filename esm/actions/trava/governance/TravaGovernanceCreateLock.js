import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
<<<<<<< HEAD
 * TravaGovernanceCreateLock - Borrow Token in Lending Pool
=======
 * TravaGovernanceCreateLock - Create lock in governance
>>>>>>> origin/ngan/sdk
 *
 * @category Trava
 */
export class TravaGovernanceCreateLock extends Action {
    constructor(token, value, lock_duration, to, from, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaGovernanceCreateLock') : contractAddress;
        super("TravaGovernanceCreateLock", _contractAddress, //getAddr("TravaGovernanceCreateLock"),
        ["address", "uint256", "uint256", "address", "address"], [token, value, lock_duration, to, from]);
    }
}
