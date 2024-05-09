import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
/**
 * TravaNFTVeTravaCreateSale - Sale NFT in VeTrava
 *
 * @category Trava
 */
export class TravaNFTVeTravaCreateSale extends Action {
    constructor(tokenId, price, option, from, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTVeTravaCreateSale') : contractAddress;
        super("TravaNFTVeTravaCreateSale", _contractAddress, //getAddr('TravaNFTVeTravaCreateSale'),
        ["uint256", "uint256", "uint256", "address"], [tokenId, price, option, from]);
    }
}
