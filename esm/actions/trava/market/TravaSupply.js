import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 * need to approve token first
 */
export class TravaSupply extends Action {
    constructor(market, token, amount, from, onBehalfOf, enableAsColl) {
        super("TravaSupply", getAddr("TravaSupply"), ["address", "address", "uint256", "address", "address", "bool"], [market, token, amount, from, onBehalfOf, enableAsColl]);
    }
}
