import { Action } from "../../../../Action"
import { getAddr } from "../../../../addresses";
import { EthAddress, uint256, uint128, bytes } from "../../../../types";

/**
 * TravaNFTHeuristicFarmingStake - Staking NFT in heuristic farming
 *
 * @category Trava
 */
export class TravaNFTHeuristicFarmingStake extends Action {
  constructor(stakingVault: EthAddress, ids: bytes, level:uint128, from:EthAddress, contractAddress?: string) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaNFTHeuristicFarmingStake') : contractAddress;

    super(
      "TravaNFTHeuristicFarmingStake",
      _contractAddress, //getAddr("TravaNFTHeuristicFarmingStake"),
      ["address", "uint256[]", "uint128", "address"],
      [stakingVault , ids , level, from ]
    );


    this.mappableArgs = [stakingVault , ids , level, from ].flat();
  }
}
