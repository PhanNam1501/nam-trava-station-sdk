import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * WePiggyRepay - Repay Token to Lending Pool
 * @category WePiggy
 */
export declare class WePiggyRepay extends Action {
    constructor(pTokenAddress: EthAddress, amount: uint256, from: EthAddress, onBehalf: EthAddress, contractAddress?: string);
}
