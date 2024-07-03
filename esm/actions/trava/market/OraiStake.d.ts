import { Action } from "../../../Action";
import { EthAddress, uint256, bytes } from "../../../types";
/**
 * Orai Stake
 *
 */
export declare class OraiStake extends Action {
    constructor(market: EthAddress, token: EthAddress, amount: uint256, timeStamp: uint256, exchangeRate: uint256, signature: bytes, from: EthAddress, onBehalfOf: EthAddress, contractAddress?: string);
}
