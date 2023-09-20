"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravaAuctionMakeBid = void 0;
const Action_1 = require("../../Action");
const addresses_1 = require("../../addresses");
/**
 * TravaAuctionMakeBid
 *
 * @category Trava
 */
class TravaAuctionMakeBid extends Action_1.Action {
    constructor(tokenId, bidPrice, from = (0, addresses_1.getAddr)('Empty'), contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? (0, addresses_1.getAddr)('TravaAuctionMakeBid') : contractAddress;
        super('TravaNFTAuctionMakeBid', _contractAddress, //getAddr('TravaAuctionMakeBid'),
        ["uint256", "uint256", "address"], [tokenId, bidPrice, from]);
    }
}
exports.TravaAuctionMakeBid = TravaAuctionMakeBid;
