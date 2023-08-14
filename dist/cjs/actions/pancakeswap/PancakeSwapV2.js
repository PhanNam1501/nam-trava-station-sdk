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
    constructor(amountIn, amountOutMin, path, to, deadline, from) {
        super("PancakeSwapV2", (0, addresses_1.getAddr)('PancakeSwapV2'), ["uint256", "uint256", "address[]", "address", "uint256", "address"], [amountIn, amountOutMin, path, to, deadline, from]);
        this.mappableArgs = [amountIn, amountOutMin, path, to, deadline, from].flat();
    }
}
exports.PancakeSwapV2 = PancakeSwapV2;
//# sourceMappingURL=PancakeSwapV2.js.map