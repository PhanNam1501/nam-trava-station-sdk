import { Action } from "../../Action";
import { EthAddress } from "../../types";
/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 * need to approve token first
 */
export declare class swapLiquidity extends Action {
    constructor(exchange: EthAddress, token: EthAddress, from: EthAddress, maxSlippage: string, amount: string, checkETH: boolean, contractAddress?: string);
}
