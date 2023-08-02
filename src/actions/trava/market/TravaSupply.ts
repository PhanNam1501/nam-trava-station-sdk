import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 * need to approve token first
 */
export class TravaSupply extends Action {
  constructor(
    market: EthAddress,
    token: EthAddress,
    amount: string,
    from: EthAddress,
    onBehalfOf: EthAddress,
    enableAsColl: boolean
  ) {
    super(
      "TravaSupply",
      getAddr("TravaSupply"),
      ["address", "address", "uint256", "address", "address", "bool"],
      [market, token, amount, from, onBehalfOf, enableAsColl]
    );
  }
}
