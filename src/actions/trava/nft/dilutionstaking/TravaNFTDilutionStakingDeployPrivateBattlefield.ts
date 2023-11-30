import { Action } from "../../../../Action"
import { getAddr } from "../../../../addresses";
import { EthAddress, uint256, } from "../../../../types";

/**
 * TravaNFTDilutionStakingDeployPrivateBattlefield - deploy NFT to private vault
 *
 * @category Trava
 */
export class TravaNFTDilutionStakingDeployPrivateBattlefield extends Action {
    constructor(deployingVault: EthAddress, tokenId: uint256, stakeAmount: uint256, fromKnight: EthAddress, fromToken: EthAddress, contractAddress?: string) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('TravaNFTDilutionStakingDeployPrivateBattlefield') : contractAddress;

        super(
            "TravaNFTDilutionStakingDeployPrivateBattlefield",
            _contractAddress, //getAddr("TravaNFTDilutionStakingDeployPrivateBattlefield"),
            ["address", "uint256", "uint256", "address", "address"],
            [deployingVault, tokenId, stakeAmount, fromKnight, fromToken]
        );
    }
}
