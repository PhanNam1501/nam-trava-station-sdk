import { Action } from '../../../../../Action';
import { EthAddress, uint256 } from '../../../../../types';
import { getAddr } from '../../../../../addresses';

/**
 * TravaAuctionCancelAuction - Cancel NFT auction in Trava
 * 
 * @category Trava
 */

export class TravaAuctionCancelAuction extends Action{
    constructor(tokenId: uint256 , from:EthAddress = getAddr('Empty'), contractAddress?: string){
    const _contractAddress: string = typeof contractAddress === "undefined" ? getAddr('TravaAuctionCancelAuction') : contractAddress;

    super(
      'TravaNFTAuctionCancelAuction',
      _contractAddress, //getAddr('TravaAuctionCancelAuction'),
      ["uint256", "address"],
      [tokenId, from]
    );
    }
}
