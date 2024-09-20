import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 * need to approve token first
 */
export class addLiquidityETH extends Action {
  constructor(
    router: EthAddress,
    token: EthAddress,
    amountToken: uint256,
    amountETH: uint256,
    amountTokenMin: uint256,
    amountETHMin: uint256,
    from: EthAddress,
    deadline: uint256,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('CamelotAddETH') : contractAddress;

    super(
      "addLiquidityETH",
      _contractAddress, //getAddr("TravaSupply"),
      ["address", "address", "uint256", "uint256", "uint256", "uint256", "address", "uint256"],
      [router, token, amountToken, amountETH, amountTokenMin, amountETHMin, from, deadline]
    );
  }
}