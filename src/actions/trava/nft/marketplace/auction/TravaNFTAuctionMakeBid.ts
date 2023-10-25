import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
import { EthAddress, uint256 } from '../../../../../types';

/**
 * TravaNFTAuctionMakeBid
 *
 * @category Trava
 */
export class TravaNFTAuctionMakeBid extends Action {
  constructor(tokenId: uint256, bidPrice: uint256, from: EthAddress = getAddr('Empty'), contractAddress?: string) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaNFTAuctionMakeBid') : contractAddress;

    super(
      'TravaNFTAuctionMakeBid',
      _contractAddress, //getAddr('TravaNFTAuctionMakeBid'),
      ["uint256", "uint256", "address"],
      [tokenId, bidPrice, from]
    );
  }
}