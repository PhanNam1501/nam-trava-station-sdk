import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
/**
 * TravaAuctionEditAuctionPrice - Edit NFT auction price in Trava
 *
 * @category Trava
 */
export class TravaAuctionEditAuctionPrice extends Action {
    constructor(tokenId, newPrice, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaAuctionEditAuctionPrice') : contractAddress;
        super('TravaNFTAuctionEditAuctionPrice', _contractAddress, //getAddr('TravaAuctionEditAuctionPrice'),
        ["uint256", "uint256"], [tokenId, newPrice]);
    }
}
