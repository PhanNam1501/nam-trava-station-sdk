import { Action } from "../../../Action";
import { EthAddress } from "../../../types";
/**
 * TravaBorrow - Borrow Token in Lending Pool
 *
 * @category Trava
 */
export declare class TravaBorrow extends Action {
    constructor(market: EthAddress, token: EthAddress, amount: string, to: EthAddress, onBehalfOf: EthAddress);
}
