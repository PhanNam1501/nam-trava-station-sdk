import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * CreamWithdraw - Withdraw Token to Lending Pool
 *
 * @category Cream
 * need to approve token first
 */
export class CreamWithdraw extends Action {
    constructor(cTokenAddress, amount, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('CreamWithdraw') : contractAddress;
        super("CreamWithdraw", _contractAddress, //getAddr("CreamWithdraw"),
        ["address", "uint256", "address"], [cTokenAddress, amount, to]);
    }
}
