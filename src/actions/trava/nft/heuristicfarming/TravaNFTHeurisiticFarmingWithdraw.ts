import { Action } from "../../../../Action"
import { getAddr } from "../../../../addresses";
import { EthAddress, uint256, uint128, bytes } from "../../../../types";

/**
 * TravaNFTHeuristicFarmingWithdraw - Withdraw NFT in heuristic farming
 *
 * @category Trava
 */
export class TravaNFTHeuristicFarmingWithdraw extends Action {
  constructor(stakingVault: EthAddress, ids: bytes, level:uint128, to:EthAddress, contractAddress?: string) {
    const _contractAddress: string =
      typeof contractAddress === "undefined" ? getAddr('TravaNFTHeuristicFarmingWithdraw') : contractAddress;

    super(
      "TravaNFTHeuristicFarmingWithdraw",
      _contractAddress, //getAddr("TravaNFTHeuristicFarmingWithdraw"),
      ["address", "uint256[]", "uint128", "address"],
      [stakingVault , ids , level, to ]
    );


    this.mappableArgs = [stakingVault , ids , level, to ].flat();
  }
}
