"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravaNFTCancelSale = void 0;
const Action_1 = require("../../../../Action");
const addresses_1 = require("../../../../addresses");
/**
 * TravaNFTCreateSale - Sell NFT in Trava
 *
 * @category Trava
 */
class TravaNFTCancelSale extends Action_1.Action {
    constructor(tokenId, to) {
        super("TravaNFTCancelSale", (0, addresses_1.getAddr)('TravaNFTCancelSale'), ["uint256", "address"], [tokenId, to]);
    }
}
exports.TravaNFTCancelSale = TravaNFTCancelSale;
//# sourceMappingURL=TravaNFTCancelSale.js.map