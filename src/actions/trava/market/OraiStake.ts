import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256, bytes } from "../../../types";

/**
 * Orai Stake
 *
 */

export class OraiStake extends Action {
  constructor(
    market: EthAddress,
    token: EthAddress,
    amount: uint256,
    timeStamp: uint256,
    exchangeRate:uint256,
    signature: bytes,
    from: EthAddress,
    onBehalfOf: EthAddress,
    contractAddress?: string
  ) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('OraiStake') : contractAddress;

    super(
      "OraiStake",
      _contractAddress, 
      ["address", "address", "uint256", "uint256", "uint256", "bytes", "address", "address"],
      [market, token, amount, timeStamp, exchangeRate, signature, from, onBehalfOf]
    );
  }
}