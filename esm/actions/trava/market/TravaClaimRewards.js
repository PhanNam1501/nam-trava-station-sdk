import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaClaimRewards -  Receive rewards
 *
 * @category Trava
 */
export class TravaClaimRewards extends Action {
    constructor(assets, amount, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaClaimRewards') : contractAddress;
        super("TravaClaimRewards", _contractAddress, //getAddr("TravaClaimRewards"),
        ["address[]", "uint256", "address"], [assets, amount, to]);
        this.mappableArgs = [assets, amount, to].flat();
    }
}
