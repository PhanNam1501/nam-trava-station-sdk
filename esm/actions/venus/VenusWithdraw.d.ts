import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * VenusWithdraw - Withdraw Token to Lending Pool
 *
 * @category Venus
 * need to approve token first
 */
export declare class VenusWithdraw extends Action {
    constructor(vTokenAddress: EthAddress, amount: uint256, to: EthAddress, contractAddress?: string);
}
