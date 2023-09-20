"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravaStakingClaimRewards = void 0;
const Action_1 = require("../../../Action");
const addresses_1 = require("../../../addresses");
/**
 * TravaStakingClaimRewards -  Receive rewards
 *
 * @category Trava
 */
class TravaStakingClaimRewards extends Action_1.Action {
    constructor(stakingPool, to, amount, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? (0, addresses_1.getAddr)('TravaStakingClaimRewards') : contractAddress;
        super("TravaStakingClaimRewards", _contractAddress, //getAddr("TravaStakingClaimRewards"),
        ["address", "address", "uint256"], [stakingPool, to, amount]);
    }
}
exports.TravaStakingClaimRewards = TravaStakingClaimRewards;
