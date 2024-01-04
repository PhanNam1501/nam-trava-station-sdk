import { Action } from "../../../Action";
import { EthAddress } from "../../../types";
/**
 * TravaRepay - Repay Token in Lending Pool
 *
 * @category Trava
 */
export declare class TravaRepay extends Action {
    constructor(market: EthAddress, token: EthAddress, amount: string, from: EthAddress, onBehalfOf: EthAddress, contractAddress?: string);
}
