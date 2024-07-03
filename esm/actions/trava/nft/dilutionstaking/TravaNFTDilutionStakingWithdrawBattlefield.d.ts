import { Action } from "../../../../Action";
import { EthAddress, uint256 } from "../../../../types";
/**
 * TravaNFTDilutionStakingWithdrawBattlefield - withdraw NFT from dilution staking
 *
 * @category Trava
 */
export declare class TravaNFTDilutionStakingWithdrawBattlefield extends Action {
    constructor(deployingVault: EthAddress, armyId: uint256, fromKnight: EthAddress, fromToken: EthAddress, contractAddress?: string);
}
