import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
 * TravaStaking - Staking token to receive rewards
 *
 * @category Trava
 */
export class TravaStakingStake extends Action {
  constructor(stakingPool: EthAddress, onBehalfOf: EthAddress, amount: string, from: EthAddress, contractAddress?: string) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaStakingStake') : contractAddress;

    super(
      "TravaStakingStake",
      _contractAddress, //getAddr("TravaStakingStake"),
      ["address", "address", "uint256", "address"],
      [stakingPool, onBehalfOf, amount, from]
    );
  }
}
