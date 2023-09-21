import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaStakingClaimRewards -  Receive rewards
 *
 * @category Trava
 */
export class TravaStakingClaimRewards extends Action {
    constructor(stakingPool, to, amount, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaStakingClaimRewards') : contractAddress;
        super("TravaStakingClaimRewards", _contractAddress, //getAddr("TravaStakingClaimRewards"),
        ["address", "address", "uint256"], [stakingPool, to, amount]);
    }
}
