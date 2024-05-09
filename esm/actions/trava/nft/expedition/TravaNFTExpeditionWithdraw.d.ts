import { Action } from "../../../../Action";
import { EthAddress, uint256 } from "../../../../types";
/**
 * TravaNFTExpeditionWithdraw - Withdraw NFT and reward in expedition
 *
 * @category Trava
 */
export declare class TravaNFTExpeditionWithdraw extends Action {
    constructor(deployingVault: EthAddress, id: uint256, toKnight: EthAddress, toToken: EthAddress, contractAddress?: string);
}
