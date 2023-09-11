import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaStakingRedeem
 *
 * @category Trava
 */
export class TravaStakingRedeem extends Action {
    constructor(stakingPool, to, amount) {
        super("TravaStakingRedeem", getAddr("TravaStakingRedeem"), ["address", "address", "uint256"], [stakingPool, to, amount]);
    }
}
