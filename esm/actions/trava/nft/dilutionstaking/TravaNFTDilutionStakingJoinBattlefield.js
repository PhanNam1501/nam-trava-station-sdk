import { Action } from "../../../../Action";
import { getAddr } from "../../../../addresses";
/**
 * TravaNFTDilutionStakingJoinBattlefield - join tokenIds NFT to vault
 *
 * @category Trava
 */
export class TravaNFTDilutionStakingJoinBattlefield extends Action {
    constructor(deployingVault, tokenIds, stakeType, lockAmount, timeLock, fromKnight, fromToken, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTDilutionStakingJoinBattlefield') : contractAddress;
        super("TravaNFTDilutionStakingJoinBattlefield", _contractAddress, //getAddr("TravaNFTDilutionStakingJoinBattlefield"),
        ["address", "uint256[]", "uint8", "uint256", "uint256", "address", "address"], [deployingVault, tokenIds, stakeType, lockAmount, timeLock, fromKnight, fromToken]);
        this.mappableArgs = [deployingVault, tokenIds, stakeType, lockAmount, timeLock, fromKnight, fromToken].flat();
    }
}
