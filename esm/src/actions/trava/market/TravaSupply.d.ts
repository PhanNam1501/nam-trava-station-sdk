import { Action } from "../../../Action";
import { EthAddress } from "../../../types";
/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 * need to approve token first
 */
export declare class TravaSupply extends Action {
    constructor(market: EthAddress, token: EthAddress, amount: string, from: EthAddress, onBehalfOf: EthAddress, enableAsColl: boolean);
}
