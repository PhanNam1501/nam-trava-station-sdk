import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * LiqeeWithdraw - Withdraw Token to Lending Pool
 * @category Liqee
 */
export declare class LiqeeWithdraw extends Action {
    constructor(iTokenAddress: EthAddress, amount: uint256, to: EthAddress, contractAddress?: string);
}
