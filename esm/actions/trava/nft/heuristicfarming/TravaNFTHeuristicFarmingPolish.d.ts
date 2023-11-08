import { Action } from "../../../../Action";
import { EthAddress, uint128, bytes } from "../../../../types";
/**
 * TravaNFTHeuristicFarmingPolish - Polish NFT in heuristic farming
 *
 * @category Trava
 */
export declare class TravaNFTHeurisiticFarmingPolish extends Action {
    constructor(stakingVault: EthAddress, ids: bytes, level: uint128, contractAddress?: string);
}
