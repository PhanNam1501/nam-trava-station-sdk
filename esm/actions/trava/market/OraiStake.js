import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * Orai Stake
 *
 */
export class OraiStake extends Action {
    constructor(market, token, amount, timeStamp, exchangeRate, signature, from, onBehalfOf, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('OraiStake') : contractAddress;
        super("OraiStake", _contractAddress, ["address", "address", "uint256", "uint256", "uint256", "bytes", "address", "address"], [market, token, amount, timeStamp, exchangeRate, signature, from, onBehalfOf]);
    }
}
