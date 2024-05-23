import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
/**
 * TravaNFTAuctionEditAuctionPrice - Create NFT Auction in Trava
 *
 * @category Trava
 */
export class TravaNFTAuctionEditAuctionPrice extends Action {
    constructor(tokenId, startingBid, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTAuctionEditAuctionPrice') : contractAddress;
        super('TravaNFTAuctionEditAuctionPrice', _contractAddress, //getAddr('TravaNFTAuctionEditAuctionPrice'),
        ["uint256", "uint256"], [tokenId, startingBid]);
    }
}
