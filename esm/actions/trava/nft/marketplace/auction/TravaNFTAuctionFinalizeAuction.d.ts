import { Action } from '../../../../../Action';
import { EthAddress, uint256 } from '../../../../../types';
/**
 * TravaNFTAuctionFinalizeAuction - Create NFT Auction in Trava
 *
 * @category Trava
 */
export declare class TravaNFTAuctionFinalizeAuction extends Action {
    constructor(tokenId: uint256, to?: EthAddress, contractAddress?: string);
}
