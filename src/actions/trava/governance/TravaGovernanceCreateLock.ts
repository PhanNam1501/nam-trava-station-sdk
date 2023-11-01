import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
 * TravaGovernanceCreateLock - Create lock in governance
 *
 * @category Trava
 */

export class TravaGovernanceCreateLock extends Action {
  constructor(
    token: EthAddress = getAddr('Empty') ,
    value: uint256,
    locktime: uint256,
    to: EthAddress = getAddr('Empty'),
    from: EthAddress = getAddr('Empty'),
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaGovernanceCreateLock') : contractAddress;

    super(
      "TravaGovernanceCreateLock",
      _contractAddress, //getAddr("TravaGovernanceCreateLock"),
      ["address", "uint256", "uint256", "address", "address"],
      [token, value, locktime, to, from]
    );
  }
}
