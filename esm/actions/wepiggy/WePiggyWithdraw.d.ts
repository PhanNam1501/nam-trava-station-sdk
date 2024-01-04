import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * WePiggyWithdraw - Withdraw Token to Lending Pool
 *
 * @category WePiggy
 * need to approve token first
 */
export declare class WePiggyWithdraw extends Action {
    constructor(pTokenAddress: EthAddress, amount: uint256, to: EthAddress, contractAddress?: string);
}
