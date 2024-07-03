import { Action } from "../../../../Action";
import { EthAddress, bytes, uint256 } from "../../../../types";
/**
 * TravaNFTDilutionStakingWithdrawPrivateBattlefield - withdraw NFT and reward, lockamount in vault
 *
 * @category Trava
 */
export declare class TravaNFTDilutionStakingWithdrawPrivateBattlefield extends Action {
    constructor(deployingVault: EthAddress, privateBattleFieldId: uint256, tokenIds: bytes, fromKnight: EthAddress, fromToken: EthAddress, contractAddress?: string);
}
