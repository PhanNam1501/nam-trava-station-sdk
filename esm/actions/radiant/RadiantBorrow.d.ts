import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * RadiantBorrow - Borrow Token to Lending Pool
 * @category Radiant
 */
export declare class RadiantBorrow extends Action {
    constructor(market: EthAddress, tokenAddr: EthAddress, amount: uint256, ratemode: uint256, to: EthAddress, onBehalf: EthAddress, contractAddress?: string);
}
