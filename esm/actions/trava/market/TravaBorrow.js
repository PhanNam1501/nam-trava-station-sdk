import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaBorrow - Borrow Token in Lending Pool
 *
 * @category Trava
 */
export class TravaBorrow extends Action {
    constructor(market, token, amount, to, onBehalfOf) {
        super("TravaBorrow", getAddr("TravaBorrow"), ["address", "address", "uint256", "address", "address"], [market, token, amount, to, onBehalfOf]);
    }
}
