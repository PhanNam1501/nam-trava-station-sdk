"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravaNFTCreateSale = void 0;
const Action_1 = require("../../../../Action");
const addresses_1 = require("../../../../addresses");
/**
 * TravaNFTCreateSale - Sell NFT in Trava
 *
 * @category Trava
 */
class TravaNFTCreateSale extends Action_1.Action {
    constructor(tokenId, price, from) {
        super("TravaNFTCreateSale", (0, addresses_1.getAddr)('TravaNFTCreateSale'), ["uint256", "uint256", "address"], [tokenId, price, from]);
    }
}
exports.TravaNFTCreateSale = TravaNFTCreateSale;
//# sourceMappingURL=TravaNFTCreateSale.js.map