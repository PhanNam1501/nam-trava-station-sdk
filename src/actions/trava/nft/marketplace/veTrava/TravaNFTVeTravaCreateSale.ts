import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
import { EthAddress, uint256 } from '../../../../../types';

/**
 * TravaNFTVeTravaCreateSale - Sale NFT in VeTrava
 *
 * @category Trava
 */
export class TravaNFTVeTravaCreateSale extends Action {
  constructor(tokenId: uint256, price: uint256, option:uint256, from: EthAddress, contractAddress?: string) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaNFTVeTravaCreateSale') : contractAddress;

    super(
      "TravaNFTVeTravaCreateSale",
      _contractAddress, //getAddr('TravaNFTVeTravaCreateSale'),
      ["uint256", "uint256","uint256", "address"],
      [tokenId, price, option, from]
    );
  }
}