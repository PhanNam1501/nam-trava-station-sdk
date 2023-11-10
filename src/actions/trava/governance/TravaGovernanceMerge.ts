import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
 * TravaGovernanceMerge - Borrow Token in Lending Pool
 *
 * @category Trava
 */

export class TravaGovernanceMerge extends Action {
  constructor(
    tokenId1: uint256,
    tokenId2: uint256,
    from: EthAddress,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaGovernanceMerge') : contractAddress;

    super(
      "TravaGovernanceMerge",
      _contractAddress, //getAddr("TravaGovernanceMerge"),
      ["uint256", "uint256", "address"],
      [tokenId1, tokenId2, from]
    );
  }
}
