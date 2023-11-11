import { Action } from '../../../../../Action';
import { getAddr } from '../../../../../addresses';
import { EthAddress, uint256 } from '../../../../../types';

/**
 * TravaNFTVeTravaCancelSale - Cancel Sale NFT in VeTrava
 *
 * @category Trava
 */
export class TravaNFTVeTravaCancelSale extends Action {
  constructor(tokenId: uint256, to: EthAddress, contractAddress?: string) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaNFTVeTravaCancelSale') : contractAddress;

    super(
      "TravaNFTVeTravaCancelSale",
      _contractAddress, //getAddr('TravaNFTVeTravaCancelSale'),
      ["uint256", "address"],
      [tokenId, to]
    );
  }
}