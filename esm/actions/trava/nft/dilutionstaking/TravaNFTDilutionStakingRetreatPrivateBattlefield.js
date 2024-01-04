import { Action } from "../../../../Action";
import { getAddr } from "../../../../addresses";
/**
 * TravaNFTDilutionStakingRetreatPrivateBattlefield - retreat NFT to private vault
 *
 * @category Trava
 */
export class TravaNFTDilutionStakingRetreatPrivateBattlefield extends Action {
    constructor(deployingVault, privateBattleFieldId, fromKnight, fromToken, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTDilutionStakingRetreatPrivateBattlefield') : contractAddress;
        super("TravaNFTDilutionStakingRetreatPrivateBattlefield", _contractAddress, //getAddr("TravaNFTDilutionStakingRetreatPrivateBattlefield"),
        ["address", "uint256", "address", "address"], [deployingVault, privateBattleFieldId, fromKnight, fromToken]);
    }
}
