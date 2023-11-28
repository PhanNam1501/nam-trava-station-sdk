import { Action } from "../../../../Action"
import { getAddr } from "../../../../addresses";
import { EthAddress, uint256 } from "../../../../types";

/**
 * TravaNFTExpeditionWithdraw - Withdraw NFT and reward in expedition
 *
 * @category Trava
 */
export class TravaNFTExpeditionWithdraw extends Action {
    constructor(deployingVault: EthAddress, id: uint256, toKnight: EthAddress, toToken:EthAddress, contractAddress?: string) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('TravaNFTExpeditionWithdraw') : contractAddress;

        super(
            "TravaNFTExpeditionWithdraw",
            _contractAddress, //getAddr("TravaNFTExpeditionWithdraw"),
            ["address", "uint256", "address", "address"],
            [deployingVault, id, toKnight , toToken]
        );
    }

}
