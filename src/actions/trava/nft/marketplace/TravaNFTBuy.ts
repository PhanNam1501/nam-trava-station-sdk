import { Action } from '../../../../Action';
import { getAddr } from '../../../../addresses';
import { EthAddress, uint256 } from '../../../../types';

/**
 * TravaNFTBuy - Buy NFT in Trava
 *
 * @category Trava
 */
export class TravaNFTBuy extends Action {
  constructor(tokenId: uint256, from: EthAddress, to: EthAddress) {
    super(
      "TravaNFTBuy",
      getAddr('TravaNFTBuy'),
      ["uint256", "address", "address"],
      [tokenId, from, to]
    );
  }
}