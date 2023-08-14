import { Action } from '../../../Action';
import { EthAddress, uint256 } from '../../../types';
/**
 * TravaNFTTransfer - Transfer Trava NFT
 *
 * @category Trava
 */
export declare class TravaNFTTransfer extends Action {
    constructor(from: EthAddress, to: EthAddress, tokenId: uint256, nftCore: EthAddress);
}
