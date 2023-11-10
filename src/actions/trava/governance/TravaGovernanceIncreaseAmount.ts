import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
 * TravaGovernanceIncreaseAmount - Borrow Token in Lending Pool
 *
 * @category Trava
 */

export class TravaGovernanceIncreaseAmount extends Action {
  constructor(
    token: EthAddress,
    tokenId: uint256,
    value: uint256,
    from: EthAddress,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaGovernanceIncreaseAmount') : contractAddress;

    super(
      "TravaGovernanceIncreaseAmount",
      _contractAddress, //getAddr("TravaGovernanceIncreaseAmount"),
      ["address", "uint256", "uint256", "address"],
      [token, tokenId, value, from]
    );
  }
}
