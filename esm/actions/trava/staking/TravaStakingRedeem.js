import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaStakingRedeem
 *
 * @category Trava
 */
export class TravaStakingRedeem extends Action {
    constructor(stakingPool, to, amount, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaStakingRedeem') : contractAddress;
        super("TravaStakingRedeem", _contractAddress, //getAddr("TravaStakingRedeem"),
        ["address", "address", "uint256"], [stakingPool, to, amount]);
    }
}
