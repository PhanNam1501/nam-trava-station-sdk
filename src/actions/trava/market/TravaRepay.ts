import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
 * TravaRepay - Repay Token in Lending Pool
 *
 * @category Trava
 */

export class TravaRepay extends Action {
  constructor(
    market: EthAddress,
    token: EthAddress,
    amount: string,
    from: EthAddress,
    onBehalfOf: EthAddress,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaRepay') : contractAddress;

    super(
      "TravaRepay",
      _contractAddress, //getAddr("TravaRepay"),
      ["address", "address", "uint256", "address", "address"],
      [market, token, amount, from, onBehalfOf]
    );
  }
}
