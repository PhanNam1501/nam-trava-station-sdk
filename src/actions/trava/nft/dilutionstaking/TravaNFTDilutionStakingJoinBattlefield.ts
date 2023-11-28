import { Action } from "../../../../Action"
import { getAddr } from "../../../../addresses";
import { EthAddress, uint256, bytes, uint8 } from "../../../../types";

/**
 * TravaNFTDilutionStakingJoinBattlefield - join tokenIds NFT to vault
 *
 * @category Trava
 */
export class TravaNFTDilutionStakingJoinBattlefield extends Action {
    constructor(deployingVault: EthAddress, tokenIds: bytes, stakeType: uint8, lockAmount: uint256, timeLock: uint256, fromKnight: EthAddress, fromToken: EthAddress, contractAddress?: string) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('TravaNFTDilutionStakingJoinBattlefield') : contractAddress;

        super(
            "TravaNFTDilutionStakingJoinBattlefield",
            _contractAddress, //getAddr("TravaNFTDilutionStakingJoinBattlefield"),
            ["address", "uint256[]", "uint8", "uint256", "uint256", "address", "address"],
            [deployingVault, tokenIds, stakeType, lockAmount, timeLock, fromKnight, fromToken]
        );


        this.mappableArgs = [deployingVault, tokenIds, stakeType, lockAmount, timeLock, fromKnight, fromToken].flat();
    }
}
