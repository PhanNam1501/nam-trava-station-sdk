import { Action } from '../../../../../Action';
import { EthAddress, uint256 } from '../../../../../types';
import { getAddr } from '../../../../../addresses';

/**
 * TravaAuctionEditAuctionPrice - Edit NFT auction price in Trava
 * 
 * @category Trava
 */

export class TravaAuctionEditAuctionPrice extends Action{
    constructor(tokenId: uint256 , newPrice: uint256, contractAddress?: string){
    const _contractAddress: string = typeof contractAddress === "undefined" ? getAddr('TravaAuctionEditAuctionPrice') : contractAddress;
    super(
      'TravaNFTAuctionEditAuctionPrice',
      _contractAddress, //getAddr('TravaAuctionEditAuctionPrice'),
      ["uint256", "uint256"],
      [tokenId, newPrice]
    );
    }
}
