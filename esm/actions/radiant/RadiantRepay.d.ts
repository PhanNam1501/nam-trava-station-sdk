import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * RadiantRepay - Repay Token to Lending Pool
 * @category Radiant
 */
export declare class RadiantRepay extends Action {
    constructor(market: EthAddress, tokenAddr: EthAddress, amount: uint256, ratemode: uint256, from: EthAddress, onBehalf: EthAddress, contractAddress?: string);
}
