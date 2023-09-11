import { Action } from "../../../Action";
import { EthAddress } from "../../../types";
/**
 * TravaStakingClaimRewards -  Receive rewards
 *
 * @category Trava
 */
export declare class TravaStakingClaimRewards extends Action {
    constructor(stakingPool: EthAddress, to: EthAddress, amount: string);
}
