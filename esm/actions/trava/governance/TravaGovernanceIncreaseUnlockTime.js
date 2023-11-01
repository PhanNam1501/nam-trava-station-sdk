import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaGovernanceIncreaseUnlockTime - Increase unlock time in governance
 *
 * @category Trava
 */
export class TravaGovernanceIncreaseUnlockTime extends Action {
    constructor(tokenId, lock_duration, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaGovernanceIncreaseUnlockTime') : contractAddress;
        super("TravaGovernanceIncreaseUnlockTime", _contractAddress, //getAddr("TravaGovernanceIncreaesUnlockTime"),
        ["uint256", "uint256"], [tokenId, lock_duration]);
    }
}
