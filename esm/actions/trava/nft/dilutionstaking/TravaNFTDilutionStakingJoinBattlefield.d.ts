import { Action } from "../../../../Action";
import { EthAddress, uint256, bytes, uint8 } from "../../../../types";
/**
 * TravaNFTDilutionStakingJoinBattlefield - join tokenIds NFT to vault
 *
 * @category Trava
 */
export declare class TravaNFTDilutionStakingJoinBattlefield extends Action {
    constructor(deployingVault: EthAddress, tokenIds: bytes, stakeType: uint8, lockAmount: uint256, timeLock: uint256, fromKnight: EthAddress, fromToken: EthAddress, contractAddress?: string);
}
