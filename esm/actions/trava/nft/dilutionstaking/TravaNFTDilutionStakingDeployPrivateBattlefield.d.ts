import { Action } from "../../../../Action";
import { EthAddress, uint256 } from "../../../../types";
/**
 * TravaNFTDilutionStakingDeployPrivateBattlefield - deploy NFT to private vault
 *
 * @category Trava
 */
export declare class TravaNFTDilutionStakingDeployPrivateBattlefield extends Action {
    constructor(deployingVault: EthAddress, tokenId: uint256, stakeAmount: uint256, fromKnight: EthAddress, fromToken: EthAddress, contractAddress?: string);
}
