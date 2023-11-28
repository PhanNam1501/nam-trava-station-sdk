import { Action } from "../../../../Action"
import { getAddr } from "../../../../addresses";
import { EthAddress, uint256, } from "../../../../types";

/**
 * TravaNFTDilutionStakingWithdrawBattlefield - withdraw NFT from dilution staking
 *
 * @category Trava
 */
export class TravaNFTDilutionStakingWithdrawBattlefield extends Action {
    constructor(deployingVault: EthAddress, armyId: uint256, fromKnight: EthAddress, fromToken: EthAddress, contractAddress?: string) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('TravaNFTDilutionStakingWithdrawBattlefield') : contractAddress;

        super(
            "TravaNFTDilutionStakingWithdrawBattlefield",
            _contractAddress, //getAddr("TravaNFTDilutionStakingWithdrawBattlefield"),
            ["address", "uint256", "address", "address"],
            [deployingVault, armyId, fromKnight, fromToken]
        );
    }
}
