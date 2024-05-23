import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaGovernanceIncreaseAmount - Borrow Token in Lending Pool
 *
 * @category Trava
 */
export class TravaGovernanceIncreaseAmount extends Action {
    constructor(token, tokenId, value, from, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaGovernanceIncreaseAmount') : contractAddress;
        super("TravaGovernanceIncreaseAmount", _contractAddress, //getAddr("TravaGovernanceIncreaseAmount"),
        ["address", "uint256", "uint256", "address"], [token, tokenId, value, from]);
    }
}
