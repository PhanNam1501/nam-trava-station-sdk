"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravaBorrow = void 0;
const Action_1 = require("../../../Action");
const addresses_1 = require("../../../addresses");
/**
 * TravaBorrow - Borrow Token in Lending Pool
 *
 * @category Trava
 */
class TravaBorrow extends Action_1.Action {
    constructor(market, token, amount, to, onBehalfOf) {
        super("TravaBorrow", (0, addresses_1.getAddr)("TravaBorrow"), ["address", "address", "uint256", "address", "address"], [market, token, amount, to, onBehalfOf]);
    }
}
exports.TravaBorrow = TravaBorrow;
//# sourceMappingURL=TravaBorrow.js.map