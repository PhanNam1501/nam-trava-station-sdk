import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
/**
 * TravaNFTVeTravaBuy - Buy NFT in VeTrava
 *
 * @category Trava
 */
export class TravaNFTVeTravaBuy extends Action {
    constructor(tokenId, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTVeTravaBuy') : contractAddress;
        super("TravaNFTVeTravaBuy", _contractAddress, //getAddr('TravaNFTVeTravaBuy'),
        ["uint256", "address"], [tokenId, to]);
    }
}
