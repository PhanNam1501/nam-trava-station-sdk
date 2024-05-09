import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * CreamRepay - Repay Token to Lending Pool
 * @category Cream
 */
export declare class CreamRepay extends Action {
    constructor(cTokenAddress: EthAddress, amount: uint256, from: EthAddress, onBehalf: EthAddress, contractAddress?: string);
}
