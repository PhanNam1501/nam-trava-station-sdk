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
  constructor(tokenId:uint256,bidPrice: uint256 ,from:EthAddress = getAddr('Empty')) {
    super(
      'TravaNFTAuctionMakeBid',
      getAddr('TravaAuctionMakeBid'),
      ["uint256", "uint256", "address"],
      [tokenId, bidPrice, from]
    );
  }
}