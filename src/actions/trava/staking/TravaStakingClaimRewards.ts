import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
 * TravaStakingClaimRewards -  Receive rewards
 *
 * @category Trava
 */
export class TravaStakingClaimRewards extends Action {
  constructor(stakingPool: EthAddress, to: EthAddress, amount: string, contractAddress?: string) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaStakingClaimRewards') : contractAddress;

    super(
      "TravaStakingClaimRewards",
      _contractAddress, //getAddr("TravaStakingClaimRewards"),
      ["address", "address", "uint256"],
      [stakingPool, to, amount]
    );
  }
}
