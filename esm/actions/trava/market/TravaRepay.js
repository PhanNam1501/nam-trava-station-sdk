import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaRepay - Repay Token in Lending Pool
 *
 * @category Trava
 */
export class TravaRepay extends Action {
    constructor(market, token, amount, from, onBehalfOf) {
        super("TravaRepay", getAddr("TravaRepay"), ["address", "address", "uint256", "address", "address"], [market, token, amount, from, onBehalfOf]);
    }
}
