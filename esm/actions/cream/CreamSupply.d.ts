import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * CreamSupply - Supply Token to Lending Pool
 *
 * @category Cream
 * need to approve token first
 */
export declare class CreamSupply extends Action {
    constructor(cTokenAddress: EthAddress, amount: uint256, from: EthAddress, enableAsColl: boolean, contractAddress?: string);
}
