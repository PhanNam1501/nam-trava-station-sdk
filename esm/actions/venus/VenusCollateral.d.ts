import { Action } from "../../Action";
import { bytes } from "../../types";
/**
 * VenusCollateral - Collateral Token to Lending Pool
 *
 * @category Venus
 */
export declare class VenusCollateral extends Action {
    constructor(cTokens: bytes, enableAsColl: bytes, contractAddress?: string);
}
