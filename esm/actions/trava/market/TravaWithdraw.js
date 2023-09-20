"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravaWithdraw = void 0;
const Action_1 = require("../../../Action");
const addresses_1 = require("../../../addresses");
/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 */
class TravaWithdraw extends Action_1.Action {
    constructor(market, token, amount, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? (0, addresses_1.getAddr)('TravaWithdraw') : contractAddress;
        super("TravaWithdraw", _contractAddress, //getAddr("TravaWithdraw"),
        ["address", "address", "uint256", "address"], [market, token, amount, to]);
    }
}
exports.TravaWithdraw = TravaWithdraw;
