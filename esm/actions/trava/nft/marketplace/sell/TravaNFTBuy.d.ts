import { Action } from '../../../../../Action';
import { EthAddress, uint256 } from '../../../../../types';
/**
 * TravaNFTBuy - Buy NFT in Trava
 *
 * @category Trava
 */
export declare class TravaNFTBuy extends Action {
    constructor(tokenId: uint256, price: uint256, from: EthAddress, to: EthAddress, contractAddress?: string);
}
