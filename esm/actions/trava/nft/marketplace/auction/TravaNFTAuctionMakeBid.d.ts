import { Action } from '../../../../../Action';
import { EthAddress, uint256 } from '../../../../../types';
/**
 * TravaNFTAuctionMakeBid
 *
 * @category Trava
 */
export declare class TravaNFTAuctionMakeBid extends Action {
    constructor(tokenId: uint256, bidPrice: uint256, from?: EthAddress, contractAddress?: string);
}
