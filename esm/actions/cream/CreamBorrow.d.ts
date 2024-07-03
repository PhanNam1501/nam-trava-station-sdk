import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * CreamBorrow - Borrow Token to Lending Pool
 * @category Cream
 */
export declare class CreamBorrow extends Action {
    constructor(cTokenAddress: EthAddress, amount: uint256, to: EthAddress, contractAddress?: string);
}
