import { Action } from '../../../../../Action';
import { EthAddress, uint256 } from '../../../../../types';
/**
 * TravaNFTAuctionCreateAuction - Create NFT Auction in Trava
 *
 * @category Trava
 */
export declare class TravaNFTAuctionCreateAuction extends Action {
    constructor(tokenId: uint256, startingBid: uint256, duration: uint256, ceilingPrice: uint256, method: uint256, from?: EthAddress, contractAddress?: string);
}
