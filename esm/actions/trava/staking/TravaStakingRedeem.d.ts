import { Action } from "../../../Action";
import { EthAddress } from "../../../types";
/**
 * TravaStakingRedeem
 *
 * @category Trava
 */
export declare class TravaStakingRedeem extends Action {
    constructor(stakingPool: EthAddress, to: EthAddress, amount: string, contractAddress?: string);
}
