import { Action } from "../../../../Action"
import { getAddr } from "../../../../addresses";
import { EthAddress, uint256 } from "../../../../types";

/**
 * TravaNFTExpeditionAbandon - abandon NFT in expedition
 *
 * @category Trava
 */
export class TravaNFTExpeditionAbandon extends Action {
    constructor(deployingVault: EthAddress, id: uint256, to: EthAddress, contractAddress?: string) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('TravaNFTExpeditionAbandon') : contractAddress;

        super(
            "TravaNFTExpeditionAbandon",
            _contractAddress, //getAddr("TravaNFTExpeditionAbandon"),
            ["address", "uint256", "address"],
            [deployingVault, id, to]
        );
    }
}
