import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
 * TravaStaking - Staking token to receive rewards
 *
 * @category Trava
 */
export class TravaStakingStake extends Action {
  constructor(stakingPool: EthAddress, onBehalfOf: EthAddress, amount: string) {
    super(
      "TravaStakingStake",
      getAddr("TravaStakingStake"),
      ["address", "address", "uint256"],
      [stakingPool, onBehalfOf, amount]
    );
  }
}
