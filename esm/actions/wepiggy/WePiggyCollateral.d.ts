import { Action } from "../../Action";
import { EthAddress } from "../../types";
/**
 * WePiggyCollateral - Collateral Token to Lending Pool
 * @category WePiggy
 */
export declare class WePiggyCollateral extends Action {
    constructor(cTokenAddress: Array<EthAddress>, enableAsColl: Array<boolean>, contractAddress?: string);
}
