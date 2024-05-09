import { Action } from "../../../Action";
import { EthAddress } from "../../../types";
/**
 * TravaConvertRewards -  Receive rewards
 *
 * @category Trava
 */
export declare class TravaConvertRewards extends Action {
    constructor(from: EthAddress, to: EthAddress, amount: string, contractAddress?: string);
}
