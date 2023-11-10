import { Action } from "../../../../Action"
import { getAddr } from "../../../../addresses";
import { EthAddress, uint256, uint128, bytes } from "../../../../types";

/**
 * TravaNFTHeuristicFarmingPolish - Polish NFT in heuristic farming
 *
 * @category Trava
 */
export class TravaNFTHeuristicFarmingPolish extends Action {
  constructor(stakingVault: EthAddress, ids: bytes, level:uint128, contractAddress?: string) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaNFTHeuristicFarmingPolish') : contractAddress;

    super(
      "TravaNFTHeuristicFarmingPolish",
      _contractAddress, //getAddr("TravaNFTHeuristicFarmingPolish"),
      ["address", "uint256[]", "uint128"],
      [stakingVault , ids , level]
    );


    this.mappableArgs = [stakingVault , ids , level].flat();
  }
}
