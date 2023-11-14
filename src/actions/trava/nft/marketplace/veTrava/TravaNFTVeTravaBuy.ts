import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
import { EthAddress, uint256 } from '../../../../../types';

/**
 * TravaNFTVeTravaBuy - Buy NFT in VeTrava
 *
 * @category Trava
 */
export class TravaNFTVeTravaBuy extends Action {
  constructor(tokenId: uint256,price: uint256,option:uint256,from:EthAddress, to: EthAddress, contractAddress?: string) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaNFTVeTravaBuy') : contractAddress;

    super(
      "TravaNFTVeTravaBuy",
      _contractAddress, //getAddr('TravaNFTVeTravaBuy'),
      ["uint256", "uint256" , "uint256" , "address" , "address"],
      [tokenId, price, option, from, to]
    );
  }
}