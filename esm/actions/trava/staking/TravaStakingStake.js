import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaStaking - Staking token to receive rewards
 *
 * @category Trava
 */
export class TravaStakingStake extends Action {
    constructor(stakingPool, onBehalfOf, amount) {
        super("TravaStakingStake", getAddr("TravaStakingStake"), ["address", "address", "uint256"], [stakingPool, onBehalfOf, amount]);
    }
}
