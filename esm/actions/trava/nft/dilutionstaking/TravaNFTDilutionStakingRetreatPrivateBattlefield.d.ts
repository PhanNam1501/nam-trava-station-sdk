import { Action } from "../../../../Action";
import { EthAddress, uint256 } from "../../../../types";
/**
 * TravaNFTDilutionStakingRetreatPrivateBattlefield - retreat NFT to private vault
 *
 * @category Trava
 */
export declare class TravaNFTDilutionStakingRetreatPrivateBattlefield extends Action {
    constructor(deployingVault: EthAddress, privateBattleFieldId: uint256, fromKnight: EthAddress, fromToken: EthAddress, contractAddress?: string);
}
