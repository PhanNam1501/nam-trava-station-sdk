import { Action } from "../../../Action";
import { getAddr } from "../../../addresses";
import { EthAddress, uint256 } from "../../../types";

/**
 * TravaStakingRedeem
 *
 * @category Trava
 */
export class TravaStakingRedeem extends Action {
  constructor(stakingPool: EthAddress, to: EthAddress, amount: string) {
    super(
      "TravaStakingRedeem",
      getAddr("TravaStakingRedeem"),
      ["address", "address", "uint256"],
      [stakingPool, to, amount]
    );
  }
}
