import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * LiqeeBorrow - Borrow Token to Lending Pool
 * @category Liqee
 */
export declare class LiqeeBorrow extends Action {
    constructor(iTokenAddress: EthAddress, amount: uint256, to: EthAddress, contractAddress?: string);
}
