import { Action } from '../../Action';
import { EthAddress, uint256 } from '../../types';
/**
 * TravaAuctionMakeBid
 *
 * @category Trava
 */
export declare class TravaAuctionMakeBid extends Action {
    constructor(tokenId: uint256, bidPrice: uint256, from?: EthAddress, contractAddress?: string);
}
