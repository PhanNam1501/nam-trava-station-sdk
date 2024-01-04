import { Action } from '../../../../../Action';
import { EthAddress, uint256 } from '../../../../../types';
/**
 * TravaNFTVeTravaCancelSale - Cancel Sale NFT in VeTrava
 *
 * @category Trava
 */
export declare class TravaNFTVeTravaCancelSale extends Action {
    constructor(tokenId: uint256, to: EthAddress, contractAddress?: string);
}
