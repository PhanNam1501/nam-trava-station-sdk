import { Action } from './Action';
import { EthAddress } from './types';
/**
 * Set of Actions to be performed sequentially in a single transaction
 *
 * @category Base Classes
 */
export declare class Recipe {
    #private;
    name: string;
    actions: Array<Action>;
    recipeExecutorAddress: string;
    extraGas: number;
    /**
     * @param name
     * @param actions
     */
    constructor(name: string, actions?: Array<Action>);
    /**
     * @param action
     */
    addAction(action: Action): Recipe;
    /**
     * Encode arguments for calling the action set via DsProxy
     * @returns `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`
     */
    encodeForDsProxyCall(): Array<string>;
    /**
     * Logs parameter mapping in verbose format for validation. Used for testing in development.
     */
    _validateParamMappings(): void;
    /**
     * Assets requiring approval to be used by DsProxy
     * Approval is done from owner to DsProxy
     */
    getAssetsToApprove(): Promise<Array<{
        owner: string;
        asset: string;
        specialApproveLabel?: string;
    } | {
        owner: string;
        nft: EthAddress;
        tokenId: string;
        specialApproveLabel?: string;
    }>>;
    /**
     * ETH value to be sent with transaction
     * @returns ETH value in wei
     */
    getEthValue(): Promise<string>;
}
