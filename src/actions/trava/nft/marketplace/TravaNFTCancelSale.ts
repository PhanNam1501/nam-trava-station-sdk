import { Action } from '../../../../Action';
import { getAddr } from '../../../../addresses';
import { EthAddress, uint256 } from '../../../../types';

/**
 * TravaNFTCreateSale - Sell NFT in Trava
 *
 * @category Trava
 */
export class TravaNFTCancelSale extends Action {
  constructor(tokenId: uint256,  to: EthAddress, contractAddress?: string) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaNFTCancelSale') : contractAddress;
      
    super(
      "TravaNFTCancelSale",
      _contractAddress, //getAddr('TravaNFTCancelSale'),
      ["uint256", "address"],
      [tokenId, to]
    );
  }
}