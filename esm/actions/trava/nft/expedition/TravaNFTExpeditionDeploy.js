import { Action } from "../../../../Action";
import { getAddr } from "../../../../addresses";
/**
 * TravaNFTExpeditionDeploy - Deploying NFT in expedition
 *
 * @category Trava
 */
export class TravaNFTExpeditionDeploy extends Action {
    constructor(deployingVault, id, buffWinRateTickets, buffExpTickets, fromKnight, fromFee, contractAddress) {
        const _contractAddress = typeof contractAddress === "undefined" ? getAddr('TravaNFTExpeditionDeploy') : contractAddress;
        super("TravaNFTExpeditionDeploy", _contractAddress, //getAddr("TravaNFTExpeditionDeploy"),
        ["address", "uint256", "uint256[]", "uint256[]", "address", "address"], [deployingVault, id, buffWinRateTickets, buffExpTickets, fromKnight, fromFee]);
        this.mappableArgs = [deployingVault, id, buffWinRateTickets, buffExpTickets, fromKnight, fromFee].flat();
    }
}
