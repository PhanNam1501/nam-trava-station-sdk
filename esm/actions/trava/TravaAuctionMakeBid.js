import { Action } from '../../Action';
import { getAddr } from '../../addresses';
/**
 * TravaAuctionMakeBid
 *
 * @category Trava
 */
export class TravaAuctionMakeBid extends Action {
    constructor(tokenId, bidPrice, from = getAddr('Empty'), contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaAuctionMakeBid') : contractAddress;
        super('TravaNFTAuctionMakeBid', _contractAddress, //getAddr('TravaAuctionMakeBid'),
        ["uint256", "uint256", "address"], [tokenId, bidPrice, from]);
    }
}
