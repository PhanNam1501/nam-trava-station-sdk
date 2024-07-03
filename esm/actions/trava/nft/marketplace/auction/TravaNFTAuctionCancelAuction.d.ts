import { Action } from '../../../../../Action';
import { EthAddress, uint256 } from '../../../../../types';
/**
 * TravaNFTAuctionCancelAuction - Create NFT Auction in Trava
 *
 * @category Trava
 */
export declare class TravaNFTAuctionCancelAuction extends Action {
    constructor(tokenId: uint256, to?: EthAddress, contractAddress?: string);
}
