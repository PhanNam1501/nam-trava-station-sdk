import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * LiqeeSupply - Supply Token to Lending Pool
 * @category Liqee
 */
export declare class LiqeeSupply extends Action {
    constructor(iTokenAddress: EthAddress, amount: uint256, from: EthAddress, enableAsColl: boolean, contractAddress?: string);
}
