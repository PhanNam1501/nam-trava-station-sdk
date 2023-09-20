import { Action } from "../../../Action";
import { EthAddress } from "../../../types";
/**
 * TravaSupply - Supply Token to Lending Pool
 *
 * @category Trava
 */
export declare class TravaWithdraw extends Action {
    constructor(market: EthAddress, token: EthAddress, amount: string, to: EthAddress, contractAddress?: string);
}
