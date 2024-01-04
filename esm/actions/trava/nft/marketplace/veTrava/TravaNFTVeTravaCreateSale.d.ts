import { Action } from '../../../../../Action';
import { EthAddress, uint256 } from '../../../../../types';
/**
 * TravaNFTVeTravaCreateSale - Sale NFT in VeTrava
 *
 * @category Trava
 */
export declare class TravaNFTVeTravaCreateSale extends Action {
    constructor(tokenId: uint256, price: uint256, option: uint256, from: EthAddress, contractAddress?: string);
}
