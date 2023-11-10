import { Action } from "../../../../Action";
import { EthAddress, uint128, bytes } from "../../../../types";
/**
 * TravaNFTHeuristicFarmingClaimReward - claim reward NFT in heuristic farming
 *
 * @category Trava
 */
export declare class TravaNFTHeuristicFarmingClaimReward extends Action {
    constructor(stakingVault: EthAddress, ids: bytes, level: uint128, contractAddress?: string);
}
