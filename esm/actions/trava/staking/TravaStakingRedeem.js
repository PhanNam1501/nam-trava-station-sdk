"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravaStakingRedeem = void 0;
const Action_1 = require("../../../Action");
const addresses_1 = require("../../../addresses");
/**
 * TravaStakingRedeem
 *
 * @category Trava
 */
class TravaStakingRedeem extends Action_1.Action {
    constructor(stakingPool, to, amount, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? (0, addresses_1.getAddr)('TravaStakingRedeem') : contractAddress;
        super("TravaStakingRedeem", _contractAddress, //getAddr("TravaStakingRedeem"),
        ["address", "address", "uint256"], [stakingPool, to, amount]);
    }
}
exports.TravaStakingRedeem = TravaStakingRedeem;
