import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
 * TravaClaimRewards -  Receive rewards
 *
 * @category Trava
 */
export class TravaClaimRewards extends Action {
    constructor(
      assets: Array<EthAddress>,
      amount: string,
      to: EthAddress,
      contractAddress?: string
    ) {
      const _contractAddress: string =
        typeof contractAddress === "undefined" ? getAddr('TravaClaimRewards') : contractAddress;
  
      super(
        "TravaClaimRewards",
        _contractAddress, //getAddr("TravaClaimRewards"),
        ["address[]", "uint256", "address"],
        [assets, amount, to]
      );

      this.mappableArgs = [assets, amount, to].flat();
    }
  }
  