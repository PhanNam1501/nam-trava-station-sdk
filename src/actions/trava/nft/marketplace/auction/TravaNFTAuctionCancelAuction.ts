import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
import { EthAddress, uint256 } from '../../../../../types';

/**
 * TravaNFTAuctionCancelAuction - Create NFT Auction in Trava
 *
 * @category Trava
 */
export class TravaNFTAuctionCancelAuction extends Action {
  constructor(tokenId: uint256, to: EthAddress = getAddr('Empty'), contractAddress?: string) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaNFTAuctionCancelAuction') : contractAddress;

    super(
      'TravaNFTAuctionCancelAuction',
      _contractAddress, //getAddr('TravaNFTAuctionCancelAuction'),
      ["uint256", "address"],
      [tokenId, to]
    );

  }
}