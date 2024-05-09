import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * RadiantSupply - Supply Token to Lending Pool
 * @category Radiant
 */
export declare class RadiantSupply extends Action {
    constructor(market: EthAddress, tokenAddr: EthAddress, amount: uint256, from: EthAddress, onBehalf: EthAddress, enableAsColl: boolean, contractAddress?: string);
}
