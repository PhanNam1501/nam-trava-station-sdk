import { Action } from "../../../../Action";
import { getAddr } from "../../../../addresses";
/**
 * TravaNFTExpeditionWithdraw - Withdraw NFT and reward in expedition
 *
 * @category Trava
 */
export class TravaNFTExpeditionWithdraw extends Action {
    constructor(deployingVault, id, toKnight, toToken, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTExpeditionWithdraw') : contractAddress;
        super("TravaNFTExpeditionWithdraw", _contractAddress, //getAddr("TravaNFTExpeditionWithdraw"),
        ["address", "uint256", "address", "address"], [deployingVault, id, toKnight, toToken]);
    }
}
