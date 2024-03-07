import { Action } from "../../Action";
import { bytes } from "../../types";
/**
 * CreamCollateral - Collateral Token to Lending Pool
 *
 * @category Cream
 */
export declare class CreamCollateral extends Action {
    constructor(cTokens: bytes, enableAsColl: bytes, contractAddress?: string);
}
