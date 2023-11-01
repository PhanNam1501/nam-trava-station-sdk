import { Action } from "../../../Action";
import { EthAddress, uint256 } from "../../../types";
/**
 * TravaGovernanceIncreaseLock - Increase lock in governance
 *
 * @category Trava
 */
export declare class TravaGovernanceIncreaseLock extends Action {
    constructor(token: string | undefined, tokenId: uint256, value: uint256, from?: EthAddress, contractAddress?: string);
}
