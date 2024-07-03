import { Action } from "../../../../Action";
import { EthAddress, uint256 } from "../../../../types";
/**
 * TravaNFTExpeditionAbandon - abandon NFT in expedition
 *
 * @category Trava
 */
export declare class TravaNFTExpeditionAbandon extends Action {
    constructor(deployingVault: EthAddress, id: uint256, to: EthAddress, contractAddress?: string);
}
