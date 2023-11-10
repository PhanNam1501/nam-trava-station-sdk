import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
 * TravaGovernanceCreateLock - Borrow Token in Lending Pool
 *
 * @category Trava
 */

export class TravaGovernanceCreateLock extends Action {
  constructor(
    token: EthAddress,
    value: uint256,
    lock_duration: uint256,
    to: EthAddress,
    from: EthAddress,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaGovernanceCreateLock') : contractAddress;

    super(
      "TravaGovernanceCreateLock",
      _contractAddress, //getAddr("TravaGovernanceCreateLock"),
      ["address", "uint256", "uint256", "address", "address"],
      [token, value, lock_duration, to, from]
    );
  }
}
