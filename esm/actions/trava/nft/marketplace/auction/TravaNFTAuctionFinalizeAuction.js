import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
/**
 * TravaNFTAuctionFinalizeAuction - Create NFT Auction in Trava
 *
 * @category Trava
 */
export class TravaNFTAuctionFinalizeAuction extends Action {
    constructor(tokenId, to = getAddr('Empty'), contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTAuctionFinalizeAuction') : contractAddress;
        super('TravaNFTAuctionFinalizeAuction', _contractAddress, //getAddr('TravaNFTAuctionFinalizeAuction'),
        ["uint256", "address"], [tokenId, to]);
    }
}
