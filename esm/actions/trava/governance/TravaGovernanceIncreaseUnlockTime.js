import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
<<<<<<< HEAD
 * TravaGovernanceIncreaseUnlockTime - Borrow Token in Lending Pool
=======
 * TravaGovernanceIncreaseUnlockTime - Increase unlock time in governance
>>>>>>> origin/ngan-sdk
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
