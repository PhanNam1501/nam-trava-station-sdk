import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * GranaryBorrow - Borrow Token to Lending Pool
 * @category Granary
 */
export declare class GranaryBorrow extends Action {
    constructor(market: EthAddress, tokenAddr: EthAddress, amount: uint256, ratemode: uint256, to: EthAddress, onBehalf: EthAddress, contractAddress?: string);
}
