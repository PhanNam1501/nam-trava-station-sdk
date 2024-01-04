import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * GranaryRepay - Repay Token to Lending Pool
 * @category Granary
 */
export class GranaryRepay extends Action {
    constructor(market, tokenAddr, amount, ratemode, from, onBehalf, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('GranaryRepay') : contractAddress;
        super("GranaryRepay", _contractAddress, //getAddr("GranaryRepay"),
        ["address", "address", "uint256", "uint256", "address", "address"], [market, tokenAddr, amount, ratemode, from, onBehalf]);
    }
}
