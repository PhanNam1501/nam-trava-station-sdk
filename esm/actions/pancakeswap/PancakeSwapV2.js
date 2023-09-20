"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PancakeSwapV2 = void 0;
const Action_1 = require("../../Action");
const addresses_1 = require("../../addresses");
/**
 * PancakeSwapV2 - swap token in PancakeSwap
 *
 * @category PancakeSwap
 */
class PancakeSwapV2 extends Action_1.Action {
    constructor(amountIn, amountOutMin, path, to, deadline, from, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? (0, addresses_1.getAddr)('PancakeSwapV2') : contractAddress;
        super("PancakeSwapV2", _contractAddress, //getAddr('PancakeSwapV2'),
        ["uint256", "uint256", "address[]", "address", "uint256", "address"], [amountIn, amountOutMin, path, to, deadline, from]);
        this.mappableArgs = [amountIn, amountOutMin, path, to, deadline, from].flat();
    }
}
exports.PancakeSwapV2 = PancakeSwapV2;
