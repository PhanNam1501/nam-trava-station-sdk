import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * VenusSupplyGateWay - Supply Token to Lending Pool
 *
 * @category Venus
 * need to approve token first
 */
export declare class VenusSupplyGateWay extends Action {
    constructor(vTokenAddress: EthAddress, amount: uint256, from: EthAddress, enableAsColl: boolean, contractAddress?: string);
}
