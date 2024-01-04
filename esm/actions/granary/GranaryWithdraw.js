import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * GranaryWithdraw - Withdraw Token to Lending Pool
 * @category Granary
 */
export class GranaryWithdraw extends Action {
    constructor(market, tokenAddr, amount, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('GranaryWithdraw') : contractAddress;
        super("GranaryWithdraw", _contractAddress, //getAddr("GranaryWithdraw"),
        ["address", "address", "uint256", "address"], [market, tokenAddr, amount, to]);
    }
}
