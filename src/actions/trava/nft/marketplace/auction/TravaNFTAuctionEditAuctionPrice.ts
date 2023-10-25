import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
import { uint256 } from '../../../../../types';

/**
 * TravaNFTAuctionEditAuctionPrice - Create NFT Auction in Trava
 *
 * @category Trava
 */
export class TravaNFTAuctionEditAuctionPrice extends Action {
    constructor(tokenId: uint256, startingBid: uint256, contractAddress?: string) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('TravaNFTAuctionEditAuctionPrice') : contractAddress;

        super(
            'TravaNFTAuctionEditAuctionPrice',
            _contractAddress, //getAddr('TravaNFTAuctionEditAuctionPrice'),
            ["uint256", "uint256"],
            [tokenId, startingBid]
        );

    }
}