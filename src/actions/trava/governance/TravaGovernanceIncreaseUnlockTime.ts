import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
<<<<<<< HEAD
 * TravaGovernanceIncreaseUnlockTime - Borrow Token in Lending Pool
=======
 * TravaGovernanceIncreaseUnlockTime - Increase unlock time in governance
>>>>>>> origin/ngan-sdk
 *
 * @category Trava
 */

export class TravaGovernanceIncreaseUnlockTime extends Action {
  constructor(
    tokenId: uint256,
    duration: uint256,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaGovernanceIncreaseUnlockTime') : contractAddress;

    super(
      "TravaGovernanceIncreaseUnlockTime",
      _contractAddress, //getAddr("TravaGovernanceIncreaseUnlockTime"),
      ["uint256", "uint256"],
      [tokenId, duration]
    );
  }
}
