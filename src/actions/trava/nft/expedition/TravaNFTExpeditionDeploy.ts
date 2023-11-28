import { Action } from "../../../../Action"
import { getAddr } from "../../../../addresses";
import { EthAddress, uint256, bytes } from "../../../../types";

/**
 * TravaNFTExpeditionDeploy - Deploying NFT in expedition
 *
 * @category Trava
 */
export class TravaNFTExpeditionDeploy extends Action {
    constructor(deployingVault: EthAddress, id: uint256, buffWinRateTickets: bytes, buffExpTickets: bytes, fromKnight: EthAddress, fromFee: EthAddress, contractAddress?: string) {
        const _contractAddress: string =
            typeof contractAddress === "undefined" ? getAddr('TravaNFTExpeditionDeploy') : contractAddress;

        super(
            "TravaNFTExpeditionDeploy",
            _contractAddress, //getAddr("TravaNFTExpeditionDeploy"),
            ["address", "uint256", "uint256[]", "uint256[]", "address" , "address"],
            [deployingVault, id, buffWinRateTickets, buffExpTickets, fromKnight , fromFee]
        );


        this.mappableArgs = [deployingVault, id, buffWinRateTickets, buffExpTickets, fromKnight, fromFee].flat();
    }
}
