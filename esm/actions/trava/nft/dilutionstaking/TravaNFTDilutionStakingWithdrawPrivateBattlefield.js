import { Action } from "../../../../Action";
import { getAddr } from "../../../../addresses";
/**
 * TravaNFTDilutionStakingWithdrawPrivateBattlefield - withdraw NFT and reward, lockamount in vault
 *
 * @category Trava
 */
export class TravaNFTDilutionStakingWithdrawPrivateBattlefield extends Action {
    constructor(deployingVault, privateBattleFieldId, tokenIds, fromKnight, fromToken, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTDilutionStakingWithdrawPrivateBattlefield') : contractAddress;
        super("TravaNFTDilutionStakingWithdrawPrivateBattlefield", _contractAddress, //getAddr("TravaNFTDilutionStakingWithdrawPrivateBattlefield"),
        ["address", "uint256", "uint256[]", "address", "address"], [deployingVault, privateBattleFieldId, tokenIds, fromKnight, fromToken]);
        this.mappableArgs = [deployingVault, privateBattleFieldId, tokenIds, fromKnight, fromToken].flat();
    }
}
