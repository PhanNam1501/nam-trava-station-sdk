import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaGovernanceWithdraw - Borrow Token in Lending Pool
 *
 * @category Trava
 */
export class TravaGovernanceWithdraw extends Action {
    constructor(tokenId, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaGovernanceWithdraw') : contractAddress;
        super("TravaGovernanceWithdraw", _contractAddress, //getAddr("TravaGovernanceWithdraw"),
        ["uint256", "address"], [tokenId, to]);
    }
}
