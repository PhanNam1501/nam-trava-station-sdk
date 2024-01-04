import { Action } from '../../../../../Action';
import { uint256 } from '../../../../../types';
/**
 * TravaNFTAuctionEditAuctionPrice - Create NFT Auction in Trava
 *
 * @category Trava
 */
export declare class TravaNFTAuctionEditAuctionPrice extends Action {
    constructor(tokenId: uint256, startingBid: uint256, contractAddress?: string);
}
