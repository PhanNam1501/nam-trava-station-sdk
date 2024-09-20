import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 * need to approve token first
 */
export class swapETHforToken extends Action {
  constructor(
    router: EthAddress,
    path: EthAddress[],
    amountETHIn: uint256,
    amountOutMin: uint256,
    to: EthAddress,
    referrer: EthAddress,
    deadline: uint256,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('CamelotSwapETHForToken') : contractAddress;

    super(
      "swapETHforToken",
      _contractAddress, //getAddr("TravaSupply"),
      ["address", "address[]", "uint256", "uint256", "address", "address", "uint256"],
      [router, path, amountETHIn, amountOutMin, to, referrer, deadline]
    );
  }
}