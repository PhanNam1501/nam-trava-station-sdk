import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
 * TravaStakingClaimRewards -  Receive rewards
 *
 * @category Trava
 */
export class TravaStakingClaimRewards extends Action {
  constructor(stakingPool: EthAddress, to: EthAddress, amount: string) {
    super(
      "TravaStakingClaimRewards",
      getAddr("TravaStakingClaimRewards"),
      ["address", "address", "uint256"],
      [stakingPool, to, amount]
    );
  }
}
