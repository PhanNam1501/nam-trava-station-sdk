import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * RadiantWithdraw - Withdraw Token to Lending Pool
 * @category Radiant
 */
export declare class RadiantWithdraw extends Action {
    constructor(market: EthAddress, tokenAddr: EthAddress, amount: uint256, to: EthAddress, contractAddress?: string);
}
