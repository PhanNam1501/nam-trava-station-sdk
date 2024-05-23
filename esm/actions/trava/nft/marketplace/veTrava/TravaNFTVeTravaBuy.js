import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
/**
 * TravaNFTVeTravaBuy - Buy NFT in VeTrava
 *
 * @category Trava
 */
export class TravaNFTVeTravaBuy extends Action {
    constructor(tokenId, price, option, from, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTVeTravaBuy') : contractAddress;
        super("TravaNFTVeTravaBuy", _contractAddress, //getAddr('TravaNFTVeTravaBuy'),
        ["uint256", "uint256", "uint256", "address", "address"], [tokenId, price, option, from, to]);
    }
}
