import { Action } from "../../Action";
import { EthAddress } from "../../types";
/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 * need to approve token first
 */
export declare class removeLiquidity extends Action {
    constructor(exchange: EthAddress, token: EthAddress, to: EthAddress, amount: string, contractAddress?: string);
}
