"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnwrapBnbAction = void 0;
const Action_1 = require("../../Action");
const general_1 = require("../../utils/general");
const addresses_1 = require("../../addresses");
/**
 * Unwraps a specified amount of WETH from the proxy
 *
 * @category BasicActions
 */
class UnwrapBnbAction extends Action_1.Action {
    /**
     * @param amount Amount to unwrap
     * @param to Transfer recipient
     */
    constructor(amount, to, contractAddress) {
        (0, general_1.requireAddress)(to);
        const _contractAddress = typeof contractAddress === "undefined" ? (0, addresses_1.getAddr)('UnwrapBnb') : contractAddress;
        super('UnwrapBnb', _contractAddress, //getAddr('UnwrapBnb'),
        [
            'uint256',
            'address',
        ], [amount, to]);
    }
}
exports.UnwrapBnbAction = UnwrapBnbAction;
