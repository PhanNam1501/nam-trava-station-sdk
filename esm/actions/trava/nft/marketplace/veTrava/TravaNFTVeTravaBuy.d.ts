import { Action } from '../../../../../Action';
import { EthAddress, uint256 } from '../../../../../types';
/**
 * TravaNFTVeTravaBuy - Buy NFT in VeTrava
 *
 * @category Trava
 */
export declare class TravaNFTVeTravaBuy extends Action {
    constructor(tokenId: uint256, price: uint256, option: uint256, from: EthAddress, to: EthAddress, contractAddress?: string);
}
