import { Action } from '../../../../Action';
import { getAddr } from '../../../../addresses';
/**
 * TravaNFTCreateSale - Sell NFT in Trava
 *
 * @category Trava
 */
export class TravaNFTCancelSale extends Action {
    constructor(tokenId, to) {
        super("TravaNFTCancelSale", getAddr('TravaNFTCancelSale'), ["uint256", "address"], [tokenId, to]);
    }
}
//# sourceMappingURL=TravaNFTCancelSale.js.map