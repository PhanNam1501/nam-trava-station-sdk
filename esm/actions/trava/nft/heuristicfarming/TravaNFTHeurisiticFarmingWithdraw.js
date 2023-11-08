import { Action } from "../../../../Action";
import { getAddr } from "../../../../addresses";
/**
 * TravaNFTHeuristicFarmingWithdraw - Withdraw NFT in heuristic farming
 *
 * @category Trava
 */
export class TravaNFTHeurisiticFarmingWithdraw extends Action {
    constructor(stakingVault, ids, level, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTHeuristicFarmingWithdraw') : contractAddress;
        super("TravaNFTHeuristicFarmingWithdraw", _contractAddress, //getAddr("TravaNFTHeuristicFarmingWithdraw"),
        ["address", "uint256[]", "uint128", "address"], [stakingVault, ids, level, to]);
        this.mappableArgs = [stakingVault, ids, level, to].flat();
    }
}
