import { Action } from '../../../../Action';
import { getAddr } from '../../../../addresses';
/**
 * TravaNFTCreateSale - Sell NFT in Trava
 *
 * @category Trava
 */
export class TravaNFTCreateSale extends Action {
    constructor(tokenId, price, from, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTCreateSale') : contractAddress;
        super("TravaNFTCreateSale", _contractAddress, //getAddr('TravaNFTCreateSale'),
        ["uint256", "uint256", "address"], [tokenId, price, from]);
    }
}
