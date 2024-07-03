import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * VenusWithdraw - Withdraw Token to Lending Pool
 *
 * @category Venus
 * need to approve token first
 */
export class VenusWithdraw extends Action {
    constructor(vTokenAddress, amount, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('VenusWithdraw') : contractAddress;
        super("VenusWithdraw", _contractAddress, //getAddr("VenusWithdraw"),
        ["address", "uint256", "address"], [vTokenAddress, amount, to]);
    }
}
