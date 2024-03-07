import { Action } from "../../Action";
import { bytes } from "../../types";
/**
 * WePiggyCollateral - Enable Collateral Token to Lending Pool
 *
 * @category WePiggy
 */
export declare class WePiggyCollateral extends Action {
    constructor(cTokens: bytes, enableAsColl: bytes, contractAddress?: string);
}
