import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
/**
 * TravaAuctionFinalizeAuction - Finalize NFT auction in Trava
 *
 * @category Trava
 */
export class TravaAuctionFinalizeAuction extends Action {
    constructor(tokenId, to = getAddr('Empty'), contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaAuctionFinalizeAuction') : contractAddress;
        super('TravaNFTAuctionFinalizeAuction', _contractAddress, //getAddr('TravaAuctionFinalizeAuction'),
        ["uint256", "address"], [tokenId, to]);
    }
}
