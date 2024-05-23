import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * GasFeeTaker
 */
export declare class GasFeeTaker extends Action {
    constructor(gasUsed: uint256, feeToken: EthAddress, availableAmount: uint256, dfsFeeDivider: uint256, path: Array<EthAddress>, contractAddress?: string);
}
