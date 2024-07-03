import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaConvertRewards -  Receive rewards
 *
 * @category Trava
 */
export class TravaConvertRewards extends Action {
    constructor(from, to, amount, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaConvertRewards') : contractAddress;
        super("TravaConvertRewards", _contractAddress, //getAddr("TravaConvertRewards"),
        ["address", "address", "uint256"], [from, to, amount]);
    }
}
