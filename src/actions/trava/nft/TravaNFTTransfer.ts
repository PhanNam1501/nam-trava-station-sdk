import { Action } from '../../../Action';
import { getAddr } from '../../../addresses';
import { EthAddress, uint256 } from '../../../types';

/**
 * TravaNFTTransfer - Transfer Trava NFT
 *
 * @category Trava
 */
export class TravaNFTTransfer extends Action {
  constructor(from: EthAddress, to: EthAddress, tokenId: uint256) {
    super(
      "TravaNFTTransfer",
      getAddr('TravaNFTTransfer'),
      ["address", "address", "uint256"],
      [from, to, tokenId]
    );
  }
}