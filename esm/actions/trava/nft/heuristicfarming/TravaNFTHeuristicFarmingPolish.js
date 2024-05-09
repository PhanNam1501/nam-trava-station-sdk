import { Action } from "../../../../Action";
import { getAddr } from "../../../../addresses";
/**
 * TravaNFTHeuristicFarmingPolish - Polish NFT in heuristic farming
 *
 * @category Trava
 */
export class TravaNFTHeuristicFarmingPolish extends Action {
    constructor(stakingVault, ids, level, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTHeuristicFarmingPolish') : contractAddress;
        super("TravaNFTHeuristicFarmingPolish", _contractAddress, //getAddr("TravaNFTHeuristicFarmingPolish"),
        ["address", "uint256[]", "uint128"], [stakingVault, ids, level]);
        this.mappableArgs = [stakingVault, ids, level].flat();
    }
}
