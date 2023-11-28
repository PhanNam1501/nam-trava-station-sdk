import { Action } from "../../../../Action"
import { getAddr } from "../../../../addresses";
import { EthAddress, uint256, } from "../../../../types";

/**
 * TravaNFTDilutionStakingRetreatPrivateBattlefield - retreat NFT to private vault
 *
 * @category Trava
 */
export class TravaNFTDilutionStakingRetreatPrivateBattlefield extends Action {
    constructor(deployingVault: EthAddress, privateBattleFieldId: uint256, fromKnight: EthAddress, fromToken: EthAddress, contractAddress?: string) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('TravaNFTDilutionStakingRetreatPrivateBattlefield') : contractAddress;

        super(
            "TravaNFTDilutionStakingRetreatPrivateBattlefield",
            _contractAddress, //getAddr("TravaNFTDilutionStakingRetreatPrivateBattlefield"),
            ["address", "uint256", "address", "address"],
            [deployingVault, privateBattleFieldId, fromKnight, fromToken]
        );
    }
}
