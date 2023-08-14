import { Action } from '../../../../Action';
import { getAddr } from '../../../../addresses';
/**
 * TravaNFTBuy - Buy NFT in Trava
 *
 * @category Trava
 */
export class TravaNFTBuy extends Action {
    constructor(tokenId, from, to) {
        super("TravaNFTBuy", getAddr('TravaNFTBuy'), ["uint256", "address", "address"], [tokenId, from, to]);
    }
}
//# sourceMappingURL=TravaNFTBuy.js.map