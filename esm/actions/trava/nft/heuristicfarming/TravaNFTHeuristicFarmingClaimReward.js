import { Action } from "../../../../Action";
import { getAddr } from "../../../../addresses";
/**
 * TravaNFTHeuristicFarmingClaimReward - claim reward NFT in heuristic farming
 *
 * @category Trava
 */
export class TravaNFTHeurisiticFarmingClaimReward extends Action {
    constructor(stakingVault, ids, level, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTHeuristicFarmingClaimReward') : contractAddress;
        super("TravaNFTHeuristicFarmingClaimReward", _contractAddress, //getAddr("TravaNFTHeuristicFarmingClaimReward"),
        ["address", "uint256[]", "uint128"], [stakingVault, ids, level]);
        this.mappableArgs = [stakingVault, ids, level].flat();
    }
}
