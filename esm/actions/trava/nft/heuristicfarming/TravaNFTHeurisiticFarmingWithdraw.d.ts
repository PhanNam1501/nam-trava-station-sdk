import { Action } from "../../../../Action";
import { EthAddress, uint128, bytes } from "../../../../types";
/**
 * TravaNFTHeuristicFarmingWithdraw - Withdraw NFT in heuristic farming
 *
 * @category Trava
 */
export declare class TravaNFTHeuristicFarmingWithdraw extends Action {
    constructor(stakingVault: EthAddress, ids: bytes, level: uint128, to: EthAddress, contractAddress?: string);
}
