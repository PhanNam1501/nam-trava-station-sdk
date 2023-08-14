import { EthAddress } from './types';
type ParamTypes = Array<string | Array<any>>;
type Args = Array<any>;
/**
 * Single action that can be executed directly, or combined into a set (ie. supply a vault)
 *
 * @category Base Classes
 */
export declare class Action {
    #private;
    contractAddress: EthAddress;
    paramTypes: ParamTypes;
    name: string;
    args: Args;
    mappableArgs: Args;
    /**
     * @param name
     * @param contractAddress
     * @param paramTypes
     * @param args
     */
    constructor(name: string, contractAddress: EthAddress, paramTypes: ParamTypes, args: Args);
    /**
     *
     */
    getId(): string;
    /**
     *
     */
    _getArgumentMapping(): Args;
    _parseParamType(paramType: string | ParamTypes, arg: Args): string | any[];
    /**
     *
     */
    _replaceWithPlaceholders(arg: Args, paramType: string | ParamTypes): any;
    /**
     *
     */
    _formatType(paramType: string | ParamTypes): string;
    /**
     * Encode arguments for calling the action directly
     * @returns bytes-encoded args
     *
     */
    _encodeForCall(): Array<string>;
    encodeForL2DsProxyCall(): string;
    encodeForL2Recipe(): string;
    /**
     * Encode arguments for calling the action via DsProxy
     * @returns `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`
     */
    encodeForDsProxyCall(): Array<string | string[]>;
    /**
     * Encodes action for Recipe call
     */
    encodeForRecipe(): Array<string | string[] | number[]>;
    encodeForStrategy(subSlots: any): Array<(string | number[])>;
    /**
     * Assets requiring approval to be used by DsProxy
     * Approval is done from owner to DsProxy
     */
    getAssetsToApprove(): Promise<Array<{
        owner?: string;
        asset?: string;
        specialApproveLabel?: string;
        [key: string]: any;
    } | {
        owner: string;
        nft: EthAddress;
        tokenId: string;
        specialApproveLabel?: string;
        [key: string]: any;
    }>>;
    /**
     * ETH value to be sent with transaction
     * @returns ETH value in wei
     */
    getEthValue(): Promise<string>;
}
export {};
//# sourceMappingURL=Action.d.ts.map