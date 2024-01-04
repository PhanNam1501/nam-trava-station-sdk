import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
/**
 * TravaNFTAuctionMakeBid
 *
 * @category Trava
 */
export class TravaNFTAuctionMakeBid extends Action {
    constructor(tokenId, bidPrice, from = getAddr('Empty'), contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTAuctionMakeBid') : contractAddress;
        super('TravaNFTAuctionMakeBid', _contractAddress, //getAddr('TravaNFTAuctionMakeBid'),
        ["uint256", "uint256", "address"], [tokenId, bidPrice, from]);
    }
}
