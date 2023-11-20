import { Action } from "../../../../Action"
import { getAddr } from "../../../../addresses";
import { EthAddress, uint256, bytes } from "../../../../types";

/**
 * TravaNFTExpeditionWithdraw - Withdraw NFT and reward in expedition
 *
 * @category Trava
 */
export class TravaNFTExpeditionWithdraw extends Action {
    constructor(deployingVault: EthAddress, id: uint256, to: EthAddress, contractAddress?: string) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('TravaNFTExpeditionWithdraw') : contractAddress;

        super(
            "TravaNFTExpeditionWithdraw",
            _contractAddress, //getAddr("TravaNFTExpeditionDeploy"),
            ["address", "uint256", "address"],
            [deployingVault, id, to]
        );
    }

}
