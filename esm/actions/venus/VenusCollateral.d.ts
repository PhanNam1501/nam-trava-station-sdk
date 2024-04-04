import { Action } from "../../Action";
import { EthAddress } from "../../types";
/**
 * VenusCollateral - Collateral Token to Lending Pool
 * @category Venus
 */
export declare class VenusCollateral extends Action {
    constructor(cTokenAddress: Array<EthAddress>, enableAsColl: Array<boolean>, contractAddress?: string);
}
