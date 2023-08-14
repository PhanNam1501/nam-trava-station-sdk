import { Action } from '../../Action';
import { getAddr } from '../../addresses';
/**
 * TravaAuctionCreateAuction - Create NFT Auction in Trava
 *
 * @category Trava
 */
export class TravaAuctionCreateAuction extends Action {
    constructor(tokenId, startingBid, duration, ceilingPrice, method, from = getAddr('Empty')) {
        super('TravaNFTAuctionCreateAuction', getAddr('TravaAuctionCreateAuction'), ["uint256", "uint256", "uint256", "uint256", "uint256", "address"], [tokenId, startingBid, duration, ceilingPrice, method, from]);
    }
}
//# sourceMappingURL=TravaAuctionCreateAuction.js.map