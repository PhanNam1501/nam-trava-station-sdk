import { Action } from '../../../../Action';
import { getAddr } from '../../../../addresses';
import { EthAddress, uint256 } from '../../../../types';

/**
 * TravaNFTBuy - Buy NFT in Trava
 *
 * @category Trava
 */
export class TravaNFTBuy extends Action {
  constructor(tokenId: uint256, price: uint256, from: EthAddress, to: EthAddress, contractAddress?: string) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaNFTBuy') : contractAddress;
    super(
      "TravaNFTBuy",
      _contractAddress, //getAddr('TravaNFTBuy'),
      ["uint256", "uint256", "address", "address"],
      [tokenId, price, from, to]
    );
  }
}