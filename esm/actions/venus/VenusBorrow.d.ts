import { Action } from "../../Action";
import { EthAddress, uint256 } from "../../types";
/**
 * VenusBorrow - Borrow Token to Lending Pool
 * @category Venus
 */
export declare class VenusBorrow extends Action {
    constructor(vTokenAddress: EthAddress, amount: uint256, to: EthAddress, contractAddress?: string);
}
