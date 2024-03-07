import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256, bytes } from "../../types";

/**
 * GasFeeTaker
 */

export class GasFeeTaker extends Action {
  constructor(
    gasUsed: uint256,
    feeToken: EthAddress,
    availableAmount: uint256,
    dfsFeeDivider: uint256,
    path: Array<EthAddress>,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('GasFeeTaker') : contractAddress;

    super(
      "GasFeeTaker",
      _contractAddress, 
      ["uint256", "address", "uint256","uint256","address[]"],
      [gasUsed, feeToken, availableAmount, dfsFeeDivider, path]
    );
    this.mappableArgs = [gasUsed, feeToken, availableAmount, dfsFeeDivider, path].flat();
  }
}