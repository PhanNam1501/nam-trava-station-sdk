"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravaAuctionCreateAuction = void 0;
const Action_1 = require("../../Action");
const addresses_1 = require("../../addresses");
/**
 * TravaAuctionCreateAuction - Create NFT Auction in Trava
 *
 * @category Trava
 */
class TravaAuctionCreateAuction extends Action_1.Action {
    constructor(tokenId, startingBid, duration, ceilingPrice, method, from = (0, addresses_1.getAddr)('Empty')) {
        super('TravaNFTAuctionCreateAuction', (0, addresses_1.getAddr)('TravaAuctionCreateAuction'), ["uint256", "uint256", "uint256", "uint256", "uint256", "address"], [tokenId, startingBid, duration, ceilingPrice, method, from]);
    }
}
exports.TravaAuctionCreateAuction = TravaAuctionCreateAuction;
//# sourceMappingURL=TravaAuctionCreateAuction.js.map