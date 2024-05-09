import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * RadiantBorrow - Borrow Token to Lending Pool
 * @category Radiant
 */
export class RadiantBorrow extends Action {
    constructor(market, tokenAddr, amount, ratemode, to, onBehalf, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('RadiantBorrow') : contractAddress;
        super("RadiantBorrow", _contractAddress, //getAddr("RadiantBorrow"),
        ["address", "address", "uint256", "uint256", "address", "address"], [market, tokenAddr, amount, ratemode, to, onBehalf]);
    }
}
