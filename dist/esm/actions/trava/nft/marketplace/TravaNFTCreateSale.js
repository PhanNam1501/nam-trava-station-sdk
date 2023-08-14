import { Action } from '../../../../Action';
import { getAddr } from '../../../../addresses';
/**
 * TravaNFTCreateSale - Sell NFT in Trava
 *
 * @category Trava
 */
export class TravaNFTCreateSale extends Action {
    constructor(tokenId, price, from) {
        super("TravaNFTCreateSale", getAddr('TravaNFTCreateSale'), ["uint256", "uint256", "address"], [tokenId, price, from]);
    }
}
//# sourceMappingURL=TravaNFTCreateSale.js.map