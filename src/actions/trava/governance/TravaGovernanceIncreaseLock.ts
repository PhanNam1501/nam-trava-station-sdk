import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
 * TravaGovernanceIncreaseLock - Increase lock in governance
 *
 * @category Trava
 */

export class TravaGovernanceIncreaseLock extends Action {
  constructor(
    token: EthAddress = getAddr('Empty'),
    tokenId: uint256,
    value: uint256,
    from: EthAddress = getAddr('Empty'),
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaGovernanceIncreaseLock') : contractAddress;

    super(
      "TravaGovernanceIncreaseLock",
      _contractAddress, //getAddr("TravaGovernanceIncreaseLock"),
      ["address", "uint256", "uint256" , "address"],
      [token, tokenId, value , from]
    );
  }
}