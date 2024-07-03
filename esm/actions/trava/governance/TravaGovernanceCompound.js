import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaGovernanceCompound - Borrow Token in Lending Pool
 *
 * @category Trava
 */
export class TravaGovernanceCompound extends Action {
    constructor(tokenId, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaGovernanceCompound') : contractAddress;
        super("TravaGovernanceCompound", _contractAddress, //getAddr("TravaGovernanceCompound"),
        ["uint256"], [tokenId]);
    }
}
