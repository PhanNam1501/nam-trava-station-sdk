import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
 * TravaBorrow - Borrow Token in Lending Pool
 *
 * @category Trava
 */

export class TravaBorrow extends Action {
  constructor(
    market: EthAddress,
    token: EthAddress,
    amount: string,
    to: EthAddress,
    onBehalfOf: EthAddress,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaBorrow') : contractAddress;

    super(
      "TravaBorrow",
      _contractAddress, //getAddr("TravaBorrow"),
      ["address", "address", "uint256", "address", "address"],
      [market, token, amount, to, onBehalfOf]
    );
  }
}
