import { Action } from "../../../Action";
import { EthAddress, uint256 } from "../../../types";
/**
 * TravaGovernanceCreateLock - Create lock in governance
 *
 * @category Trava
 */
export declare class TravaGovernanceCreateLock extends Action {
    constructor(token: string | undefined, value: uint256, locktime: uint256, to?: EthAddress, from?: EthAddress, contractAddress?: string);
}
