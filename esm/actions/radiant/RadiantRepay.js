import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * RadiantRepay - Repay Token to Lending Pool
 * @category Radiant
 */
export class RadiantRepay extends Action {
    constructor(market, tokenAddr, amount, ratemode, from, onBehalf, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('RadiantRepay') : contractAddress;
        super("RadiantRepay", _contractAddress, //getAddr("RadiantRepay"),
        ["address", "address", "uint256", "uint256", "address", "address"], [market, tokenAddr, amount, ratemode, from, onBehalf]);
    }
}
