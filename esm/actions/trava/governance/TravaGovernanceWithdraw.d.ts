import { Action } from "../../../Action";
import { EthAddress, uint256 } from "../../../types";
/**
 * TravaGovernanceWithdraw - Borrow Token in Lending Pool
 *
 * @category Trava
 */
export declare class TravaGovernanceWithdraw extends Action {
    constructor(tokenId: uint256, to: EthAddress, contractAddress?: string);
}
