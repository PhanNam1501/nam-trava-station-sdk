import { Action } from '../../../../../Action';
import { EthAddress, uint256 } from '../../../../../types';
/**
 * TravaNFTVeTravaBuy - Buy NFT in VeTrava
 *
 * @category Trava
 */
export declare class TravaNFTVeTravaBuy extends Action {
    constructor(tokenId: uint256, to: EthAddress, contractAddress?: string);
}
