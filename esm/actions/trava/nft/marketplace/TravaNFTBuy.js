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
    constructor(tokenId, price, from, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? (0, addresses_1.getAddr)('TravaNFTBuy') : contractAddress;
        super("TravaNFTBuy", _contractAddress, //getAddr('TravaNFTBuy'),
        ["uint256", "uint256", "address", "address"], [tokenId, price, from, to]);
    }
}
exports.TravaNFTBuy = TravaNFTBuy;
