import { Action } from "../../../../Action";
import { EthAddress, uint128, bytes } from "../../../../types";
/**
 * TravaNFTHeuristicFarmingStake - Staking NFT in heuristic farming
 *
 * @category Trava
 */
export declare class TravaNFTHeuristicFarmingStake extends Action {
    constructor(stakingVault: EthAddress, ids: bytes, level: uint128, from: EthAddress, contractAddress?: string);
}
