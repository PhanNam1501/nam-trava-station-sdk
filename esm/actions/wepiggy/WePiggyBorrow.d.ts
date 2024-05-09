import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * WePiggyBorrow - Borrow Token to Lending Pool
 * @category WePiggy
 */
export declare class WePiggyBorrow extends Action {
    constructor(pTokenAddress: EthAddress, amount: uint256, to: EthAddress, contractAddress?: string);
}
