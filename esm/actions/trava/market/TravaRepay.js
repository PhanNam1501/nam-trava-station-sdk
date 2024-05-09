import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaRepay - Repay Token in Lending Pool
 *
 * @category Trava
 */
export class TravaRepay extends Action {
    constructor(market, token, amount, from, onBehalfOf, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaRepay') : contractAddress;
        super("TravaRepay", _contractAddress, //getAddr("TravaRepay"),
        ["address", "address", "uint256", "address", "address"], [market, token, amount, from, onBehalfOf]);
    }
}
