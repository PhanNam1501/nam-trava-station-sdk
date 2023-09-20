"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravaRepay = void 0;
const Action_1 = require("../../../Action");
const addresses_1 = require("../../../addresses");
/**
 * TravaRepay - Repay Token in Lending Pool
 *
 * @category Trava
 */
class TravaRepay extends Action_1.Action {
    constructor(market, token, amount, from, onBehalfOf, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? (0, addresses_1.getAddr)('TravaRepay') : contractAddress;
        super("TravaRepay", _contractAddress, //getAddr("TravaRepay"),
        ["address", "address", "uint256", "address", "address"], [market, token, amount, from, onBehalfOf]);
    }
}
exports.TravaRepay = TravaRepay;
