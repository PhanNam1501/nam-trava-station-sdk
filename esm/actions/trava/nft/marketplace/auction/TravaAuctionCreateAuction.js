import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
/**
 * TravaAuctionCreateAuction - Create NFT Auction in Trava
 *
 * @category Trava
 */
export class TravaAuctionCreateAuction extends Action {
    constructor(tokenId, startingBid, duration, ceilingPrice, method, from = getAddr('Empty'), contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaAuctionCreateAuction') : contractAddress;
        super('TravaNFTAuctionCreateAuction', _contractAddress, //getAddr('TravaAuctionCreateAuction'),
        ["uint256", "uint256", "uint256", "uint256", "uint256", "address"], [tokenId, startingBid, duration, ceilingPrice, method, from]);
    }
}
