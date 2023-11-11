import { Action } from "../../../Action";
import { EthAddress, uint256 } from "../../../types";
/**
 * TravaGovernanceMerge - Merge Token id in trava governance
 *
 * @category Trava
 */
export declare class TravaGovernanceMerge extends Action {
    constructor(tokenId1: uint256, tokenId2: uint256, from?: EthAddress, contractAddress?: string);
}
