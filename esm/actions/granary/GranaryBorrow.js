import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * GranaryBorrow - Borrow Token to Lending Pool
 * @category Granary
 */
export class GranaryBorrow extends Action {
    constructor(market, tokenAddr, amount, ratemode, to, onBehalf, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('GranaryBorrow') : contractAddress;
        super("GranaryBorrow", _contractAddress, //getAddr("GranaryBorrow"),
        ["address", "address", "uint256", "uint256", "address", "address"], [market, tokenAddr, amount, ratemode, to, onBehalf]);
    }
}
