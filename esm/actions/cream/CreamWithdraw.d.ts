import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * CreamWithdraw - Withdraw Token to Lending Pool
 *
 * @category Cream
 * need to approve token first
 */
export declare class CreamWithdraw extends Action {
    constructor(cTokenAddress: EthAddress, amount: uint256, to: EthAddress, contractAddress?: string);
}
