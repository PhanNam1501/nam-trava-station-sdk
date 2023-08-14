"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravaNFTBuy = void 0;
const Action_1 = require("../../../../Action");
const addresses_1 = require("../../../../addresses");
/**
 * TravaNFTBuy - Buy NFT in Trava
 *
 * @category Trava
 */
class TravaNFTBuy extends Action_1.Action {
    constructor(tokenId, from, to) {
        super("TravaNFTBuy", (0, addresses_1.getAddr)('TravaNFTBuy'), ["uint256", "address", "address"], [tokenId, from, to]);
    }
}
exports.TravaNFTBuy = TravaNFTBuy;
//# sourceMappingURL=TravaNFTBuy.js.map