import { Action } from "../../../Action";
import { EthAddress, uint256 } from "../../../types";
/**
 * TravaGovernanceIncreaseAmount - Borrow Token in Lending Pool
 *
 * @category Trava
 */
export declare class TravaGovernanceIncreaseAmount extends Action {
    constructor(token: EthAddress, tokenId: uint256, value: uint256, from: EthAddress, contractAddress?: string);
}
