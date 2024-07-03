import { Action } from "../../../../Action";
import { EthAddress, uint256, bytes } from "../../../../types";
/**
 * TravaNFTExpeditionDeploy - Deploying NFT in expedition
 *
 * @category Trava
 */
export declare class TravaNFTExpeditionDeploy extends Action {
    constructor(deployingVault: EthAddress, id: uint256, buffWinRateTickets: bytes, buffExpTickets: bytes, fromKnight: EthAddress, fromFee: EthAddress, contractAddress?: string);
}
