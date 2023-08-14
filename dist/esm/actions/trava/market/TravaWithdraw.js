import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 */
export class TravaWithdraw extends Action {
    constructor(market, token, amount, to) {
        super("TravaWithdraw", getAddr("TravaWithdraw"), ["address", "address", "uint256", "address"], [market, token, amount, to]);
    }
}
//# sourceMappingURL=TravaWithdraw.js.map