import { Action } from "../../../../Action"
import { getAddr } from "../../../../addresses";
import { EthAddress, bytes, uint256, } from "../../../../types";

/**
 * TravaNFTDilutionStakingWithdrawPrivateBattlefield - withdraw NFT and reward, lockamount in vault
 *
 * @category Trava
 */
export class TravaNFTDilutionStakingWithdrawPrivateBattlefield extends Action {
    constructor(deployingVault: EthAddress, privateBattleFieldId: uint256, tokenIds: bytes, fromKnight: EthAddress, fromToken: EthAddress, contractAddress?: string) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('TravaNFTDilutionStakingWithdrawPrivateBattlefield') : contractAddress;

        super(
            "TravaNFTDilutionStakingWithdrawPrivateBattlefield",
            _contractAddress, //getAddr("TravaNFTDilutionStakingWithdrawPrivateBattlefield"),
            ["address", "uint256", "uint256[]", "address", "address"],
            [deployingVault, privateBattleFieldId, tokenIds, fromKnight, fromToken]
        );

        this.mappableArgs = [deployingVault, privateBattleFieldId, tokenIds, fromKnight, fromToken].flat();
    }
}
