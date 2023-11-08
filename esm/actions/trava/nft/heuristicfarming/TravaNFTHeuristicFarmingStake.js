import { Action } from "../../../../Action";
import { getAddr } from "../../../../addresses";
/**
 * TravaNFTHeuristicFarmingStake - Staking NFT in heuristic farming
 *
 * @category Trava
 */
export class TravaNFTHeuristicFarmingStake extends Action {
    constructor(stakingVault, ids, level, from, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTHeuristicFarmingStake') : contractAddress;
        super("TravaNFTHeuristicFarmingStake", _contractAddress, //getAddr("TravaNFTHeuristicFarmingStake"),
        ["address", "uint256[]", "uint128", "address"], [stakingVault, ids, level, from]);
        this.mappableArgs = [stakingVault, ids, level, from].flat();
    }
}
