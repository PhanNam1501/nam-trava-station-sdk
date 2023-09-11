import { Action } from '../../../../Action';
import { getAddr } from '../../../../addresses';
/**
 * TravaNFTBuy - Buy NFT in Trava
 *
 * @category Trava
 */
export class TravaNFTBuy extends Action {
    constructor(tokenId, price, from, to) {
        super("TravaNFTBuy", getAddr('TravaNFTBuy'), ["uint256", "uint256", "address", "address"], [tokenId, price, from, to]);
    }
}
