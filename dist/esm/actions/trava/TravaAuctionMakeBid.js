import { Action } from '../../Action';
import { getAddr } from '../../addresses';
/**
 * TravaAuctionMakeBid
 *
 * @category Trava
 */
export class TravaAuctionMakeBid extends Action {
    constructor(tokenId, bidPrice, from = getAddr('Empty')) {
        super('TravaNFTAuctionMakeBid', getAddr('TravaAuctionMakeBid'), ["uint256", "uint256", "address"], [tokenId, bidPrice, from]);
    }
}
//# sourceMappingURL=TravaAuctionMakeBid.js.map