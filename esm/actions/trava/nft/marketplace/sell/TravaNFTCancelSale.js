import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
/**
 * TravaNFTCreateSale - Sell NFT in Trava
 *
 * @category Trava
 */
export class TravaNFTCancelSale extends Action {
    constructor(tokenId, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTCancelSale') : contractAddress;
        super("TravaNFTCancelSale", _contractAddress, //getAddr('TravaNFTCancelSale'),
        ["uint256", "address"], [tokenId, to]);
    }
}
