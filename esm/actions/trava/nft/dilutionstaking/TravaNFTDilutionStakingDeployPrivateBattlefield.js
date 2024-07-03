import { Action } from "../../../../Action";
import { getAddr } from "../../../../addresses";
/**
 * TravaNFTDilutionStakingDeployPrivateBattlefield - deploy NFT to private vault
 *
 * @category Trava
 */
export class TravaNFTDilutionStakingDeployPrivateBattlefield extends Action {
    constructor(deployingVault, tokenId, stakeAmount, fromKnight, fromToken, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTDilutionStakingDeployPrivateBattlefield') : contractAddress;
        super("TravaNFTDilutionStakingDeployPrivateBattlefield", _contractAddress, //getAddr("TravaNFTDilutionStakingDeployPrivateBattlefield"),
        ["address", "uint256", "uint256", "address", "address"], [deployingVault, tokenId, stakeAmount, fromKnight, fromToken]);
    }
}
