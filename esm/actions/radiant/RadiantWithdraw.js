import { Action } from "../../Action";
import { getAddr } from "../../addresses";
/**
 * RadiantWithdraw - Withdraw Token to Lending Pool
 * @category Radiant
 */
export class RadiantWithdraw extends Action {
    constructor(market, tokenAddr, amount, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('RadiantWithdraw') : contractAddress;
        super("RadiantWithdraw", _contractAddress, //getAddr("RadiantWithdraw"),
        ["address", "address", "uint256", "address"], [market, tokenAddr, amount, to]);
    }
}
