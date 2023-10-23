import { Action } from '../../../../../Action';
import { requireAddress } from '../../../../../utils/general';
import { getAddr } from '../../../../../addresses';
import { EthAddress, uint256 } from '../../../../../types';

/**
 * TravaAuctionCreateAuction - Create NFT Auction in Trava
 *
 * @category Trava
 */
export class TravaAuctionCreateAuction extends Action {
  constructor(tokenId:uint256, startingBid:uint256, duration:uint256, ceilingPrice:uint256, method:uint256, from:EthAddress = getAddr('Empty'), contractAddress?: string) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaAuctionCreateAuction') : contractAddress;

    super(
      'TravaNFTAuctionCreateAuction',
      _contractAddress, //getAddr('TravaAuctionCreateAuction'),
      ["uint256", "uint256", "uint256", "uint256", "uint256", "address"],
      [tokenId, startingBid, duration, ceilingPrice, method, from]
    );

  }
}