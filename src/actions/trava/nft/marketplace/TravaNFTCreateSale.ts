import { Action } from '../../../../Action';
import { getAddr } from '../../../../addresses';
import { EthAddress, uint256 } from '../../../../types';

/**
 * TravaNFTCreateSale - Sell NFT in Trava
 *
 * @category Trava
 */
export class TravaNFTCreateSale extends Action {
  constructor(tokenId: uint256, price: uint256, from: EthAddress, contractAddress?: string) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaNFTCreateSale') : contractAddress;

    super(
      "TravaNFTCreateSale",
      _contractAddress, //getAddr('TravaNFTCreateSale'),
      ["uint256", "uint256", "address"],
      [tokenId, price, from]
    );
  }
}