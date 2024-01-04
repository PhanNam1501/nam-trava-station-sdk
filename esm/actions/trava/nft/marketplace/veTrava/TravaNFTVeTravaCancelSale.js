import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
/**
 * TravaNFTVeTravaCancelSale - Cancel Sale NFT in VeTrava
 *
 * @category Trava
 */
export class TravaNFTVeTravaCancelSale extends Action {
    constructor(tokenId, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTVeTravaCancelSale') : contractAddress;
        super("TravaNFTVeTravaCancelSale", _contractAddress, //getAddr('TravaNFTVeTravaCancelSale'),
        ["uint256", "address"], [tokenId, to]);
    }
}
