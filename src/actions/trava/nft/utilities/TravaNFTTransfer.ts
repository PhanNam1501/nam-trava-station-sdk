import { Action } from '../../../../Action';
import { getAddr } from '../../../../addresses';
import { EthAddress, uint256 } from '../../../../types';

/**
 * TravaNFTTransfer - Transfer Trava NFT
 *
 * @category Trava
 */
export class TravaNFTTransfer extends Action {
  constructor(from: EthAddress, to: EthAddress, tokenId: uint256, nftCore: EthAddress, contractAddress?: string) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaNFTTransfer') : contractAddress;

    super(
      "TravaNFTTransfer",
      _contractAddress, //getAddr('TravaNFTTransfer'),
      ["address", "address", "uint256", "address"],
      [from, to, tokenId, nftCore]
    );
  }
}