import { Action } from '../../../Action';
import { getAddr } from '../../../addresses';
/**
 * TravaNFTTransfer - Transfer Trava NFT
 *
 * @category Trava
 */
export class TravaNFTTransfer extends Action {
    constructor(from, to, tokenId, nftCore) {
        super("TravaNFTTransfer", getAddr('TravaNFTTransfer'), ["address", "address", "uint256", "address"], [from, to, tokenId, nftCore]);
    }
}
