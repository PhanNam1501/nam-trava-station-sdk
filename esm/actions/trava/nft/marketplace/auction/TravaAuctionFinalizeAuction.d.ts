import { Action } from '../../../../../Action';
import { EthAddress, uint256 } from '../../../../../types';
/**
 * TravaAuctionFinalizeAuction - Finalize NFT auction in Trava
 *
 * @category Trava
 */
export declare class TravaAuctionFinalizeAuction extends Action {
    constructor(tokenId: uint256, to?: EthAddress, contractAddress?: string);
}
