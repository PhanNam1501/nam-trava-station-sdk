import { Action } from "../../../Action";
import { EthAddress, uint256 } from "../../../types";
/**
 * TravaGovernanceMerge - Borrow Token in Lending Pool
 *
 * @category Trava
 */
export declare class TravaGovernanceMerge extends Action {
    constructor(tokenId1: uint256, tokenId2: uint256, from: EthAddress, contractAddress?: string);
}
