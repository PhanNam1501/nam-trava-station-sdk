import { Action } from "../../Action";
import { getAddr } from "../../addresses";
import { EthAddress, uint256 } from "../../types";

/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 * need to approve token first
 */
export class swapLiquidity extends Action {
  constructor(
    exchange: EthAddress,
    token: EthAddress,
    from: EthAddress,
    maxSlippage: string,
    amount : string,
    checkETH: boolean,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('SWAPLIAddress') : contractAddress;

    super(
      "swapLiquidity",
      _contractAddress, //getAddr("TravaSupply"),
      ["address", "address", "address", "uint256", "uint256", "bool"],
      [exchange, token, from, maxSlippage, amount, checkETH]
    );
  }
}