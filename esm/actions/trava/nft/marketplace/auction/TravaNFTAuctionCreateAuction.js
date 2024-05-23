import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
/**
 * TravaNFTAuctionCreateAuction - Create NFT Auction in Trava
 *
 * @category Trava
 */
export class TravaNFTAuctionCreateAuction extends Action {
    constructor(tokenId, startingBid, duration, ceilingPrice, method, from = getAddr('Empty'), contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTAuctionCreateAuction') : contractAddress;
        super('TravaNFTAuctionCreateAuction', _contractAddress, //getAddr('TravaNFTAuctionCreateAuction'),
        ["uint256", "uint256", "uint256", "uint256", "uint256", "address"], [tokenId, startingBid, duration, ceilingPrice, method, from]);
    }
}
