import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * GranaryRepay - Repay Token to Lending Pool
 * @category Granary
 */
export declare class GranaryRepay extends Action {
    constructor(market: EthAddress, tokenAddr: EthAddress, amount: uint256, ratemode: uint256, from: EthAddress, onBehalf: EthAddress, contractAddress?: string);
}
