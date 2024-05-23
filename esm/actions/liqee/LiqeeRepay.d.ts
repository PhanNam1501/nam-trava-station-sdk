import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * LiqeeRepay - Repay Token to Lending Pool
 * @category Liqee
 */
export declare class LiqeeRepay extends Action {
    constructor(iTokenAddress: EthAddress, amount: uint256, from: EthAddress, onBehalf: EthAddress, contractAddress?: string);
}
