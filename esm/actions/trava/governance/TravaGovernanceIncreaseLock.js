import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaGovernanceIncreaseLock - Increase lock in governance
 *
 * @category Trava
 */
export class TravaGovernanceIncreaseLock extends Action {
    constructor(token = getAddr('Empty'), tokenId, value, from = getAddr('Empty'), contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaGovernanceIncreaseLock') : contractAddress;
        super("TravaGovernanceIncreaseLock", _contractAddress, //getAddr("TravaGovernanceIncreaseLock"),
        ["address", "uint256", "uint256", "address"], [token, tokenId, value, from]);
    }
}
