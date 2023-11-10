import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
 * TravaGovernanceCompound - Borrow Token in Lending Pool
 *
 * @category Trava
 */

export class TravaGovernanceCompound extends Action {
  constructor(
    tokenId: uint256,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaGovernanceCompound') : contractAddress;

    super(
      "TravaGovernanceCompound",
      _contractAddress, //getAddr("TravaGovernanceCompound"),
      ["uint256"],
      [tokenId]
    );
  }
}
