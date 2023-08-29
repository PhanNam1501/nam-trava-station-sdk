import { Action } from "../../../Action";
import { EthAddress } from "../../../types";
/**
 * TravaStaking - Staking token to receive rewards
 *
 * @category Trava
 */
export declare class TravaStakingStake extends Action {
    constructor(token: EthAddress, onBehalfOf: EthAddress, amount: string);
}
