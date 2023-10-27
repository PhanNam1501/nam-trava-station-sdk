import { Action } from '../../../../../Action';
import { EthAddress, uint256 } from '../../../../../types';
/**
 * TravaAuctionCancelAuction - Cancel NFT auction in Trava
 *
 * @category Trava
 */
export declare class TravaAuctionCancelAuction extends Action {
    constructor(tokenId: uint256, from?: EthAddress, contractAddress?: string);
}
