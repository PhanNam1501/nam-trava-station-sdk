import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
 * TravaGovernanceMerge - Merge Token id in trava governance
 *
 * @category Trava
 */

export class TravaGovernanceMerge extends Action {
  constructor(
    from: uint256,
    to: uint256,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaGovernanceMerge') : contractAddress;

    super(
      "TravaGovernanceMerge",
      _contractAddress, //getAddr("TravaGovernanceMerge"),
      ["uint256", "uint256" ],
      [from, to]
    );
  }
}
