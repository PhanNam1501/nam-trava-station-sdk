import { Action } from "../../../../Action";
import { getAddr } from "../../../../addresses";
/**
 * TravaNFTExpeditionAbandon - abandon NFT in expedition
 *
 * @category Trava
 */
export class TravaNFTExpeditionAbandon extends Action {
    constructor(deployingVault, id, to, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTExpeditionAbandon') : contractAddress;
        super("TravaNFTExpeditionAbandon", _contractAddress, //getAddr("TravaNFTExpeditionAbandon"),
        ["address", "uint256", "address"], [deployingVault, id, to]);
    }
}
