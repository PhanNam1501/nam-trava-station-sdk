import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
/**
 * TravaAuctionCancelAuction - Cancel NFT auction in Trava
 *
 * @category Trava
 */
export class TravaAuctionCancelAuction extends Action {
    constructor(tokenId, from = getAddr('Empty'), contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaAuctionCancelAuction') : contractAddress;
        super('TravaNFTAuctionCancelAuction', _contractAddress, //getAddr('TravaAuctionCancelAuction'),
        ["uint256", "address"], [tokenId, from]);
    }
}
