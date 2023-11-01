import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaGovernanceMerge - Merge Token id in trava governance
 *
 * @category Trava
 */
export class TravaGovernanceMerge extends Action {
    constructor(from, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaGovernanceMerge') : contractAddress;
        super("TravaGovernanceMerge", _contractAddress, //getAddr("TravaGovernanceMerge"),
        ["uint256", "uint256"], [from, to]);
    }
}
