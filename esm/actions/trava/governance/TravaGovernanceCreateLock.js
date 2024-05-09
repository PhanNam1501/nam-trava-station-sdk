import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaGovernanceCreateLock - Create lock in governance
 *
 * @category Trava
 */
export class TravaGovernanceCreateLock extends Action {
    constructor(token = getAddr('Empty'), value, locktime, to = getAddr('Empty'), from = getAddr('Empty'), contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaGovernanceCreateLock') : contractAddress;
        super("TravaGovernanceCreateLock", _contractAddress, //getAddr("TravaGovernanceCreateLock"),
        ["address", "uint256", "uint256", "address", "address"], [token, value, locktime, to, from]);
    }
}
