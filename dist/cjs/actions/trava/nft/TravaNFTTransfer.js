"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravaNFTTransfer = void 0;
const Action_1 = require("../../../Action");
const addresses_1 = require("../../../addresses");
/**
 * TravaNFTTransfer - Transfer Trava NFT
 *
 * @category Trava
 */
class TravaNFTTransfer extends Action_1.Action {
    constructor(from, to, tokenId, nftCore) {
        super("TravaNFTTransfer", (0, addresses_1.getAddr)('TravaNFTTransfer'), ["address", "address", "uint256", "address"], [from, to, tokenId, nftCore]);
    }
}
exports.TravaNFTTransfer = TravaNFTTransfer;
//# sourceMappingURL=TravaNFTTransfer.js.map