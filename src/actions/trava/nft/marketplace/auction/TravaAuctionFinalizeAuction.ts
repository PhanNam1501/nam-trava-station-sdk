import { Action } from '../../../../../Action';
import { EthAddress, uint256 } from '../../../../../types';
import { getAddr } from '../../../../../addresses';

/**
 * TravaAuctionFinalizeAuction - Finalize NFT auction in Trava
 * 
 * @category Trava
 */

export class TravaAuctionFinalizeAuction extends Action{
    constructor(tokenId: uint256 ,  to:EthAddress = getAddr('Empty'), contractAddress?: string){ 
    const _contractAddress: string = typeof contractAddress === "undefined" ? getAddr('TravaAuctionFinalizeAuction') : contractAddress;
    super(
      'TravaNFTAuctionFinalizeAuction',
      _contractAddress, //getAddr('TravaAuctionFinalizeAuction'),
      ["uint256", "address"],
      [tokenId, to]
    );
    }
}
