import { Action } from "../../../../Action";
import { getAddr } from "../../../../addresses";
/**
 * TravaNFTDilutionStakingWithdrawBattlefield - withdraw NFT from dilution staking
 *
 * @category Trava
 */
export class TravaNFTDilutionStakingWithdrawBattlefield extends Action {
    constructor(deployingVault, armyId, fromKnight, fromToken, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTDilutionStakingWithdrawBattlefield') : contractAddress;
        super("TravaNFTDilutionStakingWithdrawBattlefield", _contractAddress, //getAddr("TravaNFTDilutionStakingWithdrawBattlefield"),
        ["address", "uint256", "address", "address"], [deployingVault, armyId, fromKnight, fromToken]);
    }
}
