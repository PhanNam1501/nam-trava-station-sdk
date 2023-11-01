import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
 * TravaGovernanceIncreaseUnlockTime - Increase unlock time in governance
 *
 * @category Trava
 */

export class TravaGovernanceIncreaseUnlockTime extends Action {
  constructor(
    tokenId: uint256,
    lock_duration: uint256,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaGovernanceIncreaseUnlockTime') : contractAddress;

    super(
      "TravaGovernanceIncreaseUnlockTime",
      _contractAddress, //getAddr("TravaGovernanceIncreaesUnlockTime"),
      ["uint256", "uint256" ],
      [tokenId, lock_duration]
    );
  }
}
