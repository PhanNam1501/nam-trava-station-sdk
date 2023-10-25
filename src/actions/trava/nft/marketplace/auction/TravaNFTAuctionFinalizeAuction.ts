import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
import { EthAddress, uint256 } from '../../../../../types';

/**
 * TravaNFTAuctionFinalizeAuction - Create NFT Auction in Trava
 *
 * @category Trava
 */
export class TravaNFTAuctionFinalizeAuction extends Action {
    constructor(tokenId: uint256, to: EthAddress = getAddr('Empty'), contractAddress?: string) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('TravaNFTAuctionFinalizeAuction') : contractAddress;

        super(
            'TravaNFTAuctionFinalizeAuction',
            _contractAddress, //getAddr('TravaNFTAuctionFinalizeAuction'),
            ["uint256", "address"],
            [tokenId, to]
        );

    }
}