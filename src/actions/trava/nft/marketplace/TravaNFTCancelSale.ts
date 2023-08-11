import { Action } from '../../../../Action';
import { getAddr } from '../../../../addresses';
import { EthAddress, uint256 } from '../../../../types';

/**
 * TravaNFTCreateSale - Sell NFT in Trava
 *
 * @category Trava
 */
export class TravaNFTCancelSale extends Action {
  constructor(tokenId: uint256,  to: EthAddress) {
    super(
      "TravaNFTCancelSale",
      getAddr('TravaNFTCancelSale'),
      ["uint256", "address"],
      [tokenId, to]
    );
  }
}