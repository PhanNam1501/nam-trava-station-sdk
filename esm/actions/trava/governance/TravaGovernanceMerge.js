import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaGovernanceMerge - Borrow Token in Lending Pool
 *
 * @category Trava
 */
export class TravaGovernanceMerge extends Action {
    constructor(tokenId1, tokenId2, from, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaGovernanceMerge') : contractAddress;
        super("TravaGovernanceMerge", _contractAddress, //getAddr("TravaGovernanceMerge"),
        ["uint256", "uint256", "address"], [tokenId1, tokenId2, from]);
    }
}
