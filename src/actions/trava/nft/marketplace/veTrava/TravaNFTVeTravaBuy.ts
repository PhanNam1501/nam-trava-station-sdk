import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
import { EthAddress, uint256 } from '../../../../../types';

/**
 * TravaNFTVeTravaBuy - Buy NFT in VeTrava
 *
 * @category Trava
 */
export class TravaNFTVeTravaBuy extends Action {
  constructor(tokenId: uint256, to: EthAddress, contractAddress?: string) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaNFTVeTravaBuy') : contractAddress;

    super(
      "TravaNFTVeTravaBuy",
      _contractAddress, //getAddr('TravaNFTVeTravaBuy'),
      ["uint256", "address"],
      [tokenId, to]
    );
  }
}