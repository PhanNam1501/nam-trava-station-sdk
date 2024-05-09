import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * GranarySupply - Supply Token to Lending Pool
 * @category Granary
 */
export declare class GranarySupply extends Action {
    constructor(market: EthAddress, tokenAddr: EthAddress, amount: uint256, from: EthAddress, onBehalf: EthAddress, enableAsColl: boolean, contractAddress?: string);
}
