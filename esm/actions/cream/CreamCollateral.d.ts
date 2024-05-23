import { Action } from "../../Action";
import { EthAddress } from "../../types";
/**
 * CreamCollateral - Collateral Token to Lending Pool
 * @category Cream
 */
export declare class CreamCollateral extends Action {
    constructor(cTokenAddress: Array<EthAddress>, enableAsColl: Array<boolean>, contractAddress?: string);
}
