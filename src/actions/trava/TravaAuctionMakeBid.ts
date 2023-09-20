import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * TravaAuctionMakeBid
 *
 * @category Trava
 */
export class TravaAuctionMakeBid extends Action {
  constructor(tokenId:uint256,bidPrice: uint256 ,from:EthAddress = getAddr('Empty'), contractAddress?: string) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaAuctionMakeBid') : contractAddress;
      
    super(
      'TravaNFTAuctionMakeBid',
      _contractAddress, //getAddr('TravaAuctionMakeBid'),
      ["uint256", "uint256", "address"],
      [tokenId, bidPrice, from]
    );
  }
}