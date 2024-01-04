import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaGovernanceIncreaseUnlockTime - Borrow Token in Lending Pool
 *
 * @category Trava
 */
export class TravaGovernanceIncreaseUnlockTime extends Action {
    constructor(tokenId, duration, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaGovernanceIncreaseUnlockTime') : contractAddress;
        super("TravaGovernanceIncreaseUnlockTime", _contractAddress, //getAddr("TravaGovernanceIncreaseUnlockTime"),
        ["uint256", "uint256"], [tokenId, duration]);
    }
}
