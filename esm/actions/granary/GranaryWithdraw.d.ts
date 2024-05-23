import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * GranaryWithdraw - Withdraw Token to Lending Pool
 * @category Granary
 */
export declare class GranaryWithdraw extends Action {
    constructor(market: EthAddress, tokenAddr: EthAddress, amount: uint256, to: EthAddress, contractAddress?: string);
}
