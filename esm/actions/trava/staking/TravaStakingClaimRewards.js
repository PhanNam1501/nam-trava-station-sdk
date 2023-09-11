import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaStakingClaimRewards -  Receive rewards
 *
 * @category Trava
 */
export class TravaStakingClaimRewards extends Action {
    constructor(stakingPool, to, amount) {
        super("TravaStakingClaimRewards", getAddr("TravaStakingClaimRewards"), ["address", "address", "uint256"], [stakingPool, to, amount]);
    }
}
