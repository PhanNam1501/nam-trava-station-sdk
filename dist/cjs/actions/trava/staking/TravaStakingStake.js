"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravaStakingStake = void 0;
const Action_1 = require("../../../Action");
const addresses_1 = require("../../../addresses");
/**
 * TravaStaking - Staking token to receive rewards
 *
 * @category Trava
 */
class TravaStakingStake extends Action_1.Action {
    constructor(token, onBehalfOf, amount) {
        super("TravaStakingStake", (0, addresses_1.getAddr)("TravaStakingStake"), ["address", "address", "uint256"], [token, onBehalfOf, amount]);
    }
}
exports.TravaStakingStake = TravaStakingStake;
//# sourceMappingURL=TravaStakingStake.js.map