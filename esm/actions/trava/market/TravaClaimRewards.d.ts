import { Action } from "../../../Action";
import { EthAddress } from "../../../types";
/**
 * TravaClaimRewards -  Receive rewards
 *
 * @category Trava
 */
export declare class TravaClaimRewards extends Action {
    constructor(assets: Array<EthAddress>, amount: string, to: EthAddress, contractAddress?: string);
}
