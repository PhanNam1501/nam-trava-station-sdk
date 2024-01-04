import { Action } from '../../../../../Action';
import { EthAddress, uint256 } from '../../../../../types';
/**
 * TravaNFTCreateSale - Sell NFT in Trava
 *
 * @category Trava
 */
export declare class TravaNFTCreateSale extends Action {
    constructor(tokenId: uint256, price: uint256, from: EthAddress, contractAddress?: string);
}
