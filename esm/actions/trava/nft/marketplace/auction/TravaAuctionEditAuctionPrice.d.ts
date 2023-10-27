import { Action } from '../../../../../Action';
import { uint256 } from '../../../../../types';
/**
 * TravaAuctionEditAuctionPrice - Edit NFT auction price in Trava
 *
 * @category Trava
 */
export declare class TravaAuctionEditAuctionPrice extends Action {
    constructor(tokenId: uint256, newPrice: uint256, contractAddress?: string);
}
