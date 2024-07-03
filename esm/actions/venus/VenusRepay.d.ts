import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * VenusRepay - Repay Token to Lending Pool
 * @category Venus
 */
export declare class VenusRepay extends Action {
    constructor(vTokenAddress: EthAddress, amount: uint256, from: EthAddress, onBehalf: EthAddress, contractAddress?: string);
}
