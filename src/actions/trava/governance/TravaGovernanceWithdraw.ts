import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
 * TravaGovernanceWithdraw - Borrow Token in Lending Pool
 *
 * @category Trava
 */

export class TravaGovernanceWithdraw extends Action {
  constructor(
    tokenId: uint256,
    to: EthAddress,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaGovernanceWithdraw') : contractAddress;

    super(
      "TravaGovernanceWithdraw",
      _contractAddress, //getAddr("TravaGovernanceWithdraw"),
      ["uint256", "address"],
      [tokenId, to]
    );
  }
}
