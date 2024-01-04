import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
/**
 * TravaNFTAuctionCancelAuction - Create NFT Auction in Trava
 *
 * @category Trava
 */
export class TravaNFTAuctionCancelAuction extends Action {
    constructor(tokenId, to = getAddr('Empty'), contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTAuctionCancelAuction') : contractAddress;
        super('TravaNFTAuctionCancelAuction', _contractAddress, //getAddr('TravaNFTAuctionCancelAuction'),
        ["uint256", "address"], [tokenId, to]);
    }
}
