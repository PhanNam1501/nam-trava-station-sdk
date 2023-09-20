"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravaSupply = void 0;
const Action_1 = require("../../../Action");
const addresses_1 = require("../../../addresses");
/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 * need to approve token first
 */
class TravaSupply extends Action_1.Action {
    constructor(market, token, amount, from, onBehalfOf, enableAsColl, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? (0, addresses_1.getAddr)('TravaSupply') : contractAddress;
        super("TravaSupply", _contractAddress, //getAddr("TravaSupply"),
        ["address", "address", "uint256", "address", "address", "bool"], [market, token, amount, from, onBehalfOf, enableAsColl]);
    }
}
exports.TravaSupply = TravaSupply;
