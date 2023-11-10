import { Action } from "../../../../Action"
import { getAddr } from "../../../../addresses";
import { EthAddress, uint256, uint128, bytes } from "../../../../types";

/**
 * TravaNFTHeuristicFarmingClaimReward - claim reward NFT in heuristic farming
 *
 * @category Trava
 */
export class TravaNFTHeuristicFarmingClaimReward extends Action {
  constructor(stakingVault: EthAddress, ids: bytes, level:uint128, contractAddress?: string) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaNFTHeuristicFarmingClaimReward') : contractAddress;

    super(
      "TravaNFTHeuristicFarmingClaimReward",
      _contractAddress, //getAddr("TravaNFTHeuristicFarmingClaimReward"),
      ["address", "uint256[]", "uint128"],
      [stakingVault , ids , level]
    );

    this.mappableArgs = [stakingVault , ids , level].flat();
  }
}
