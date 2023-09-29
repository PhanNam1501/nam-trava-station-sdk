import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
 * TravaConvertRewards -  Receive rewards
 *
 * @category Trava
 */
export class TravaConvertRewards extends Action {
    constructor(
      from: EthAddress,
      to: EthAddress,
      amount: string,
      contractAddress?: string
    ) {
      const _contractAddress: string =
        typeof contractAddress === "undefined" ? getAddr('TravaConvertRewards') : contractAddress;
  
      super(
        "TravaConvertRewards",
        _contractAddress, //getAddr("TravaConvertRewards"),
        ["address", "address", "uint256"],
        [from, to, amount]
      );
    }
  }
  