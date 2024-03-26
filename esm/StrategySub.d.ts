/**
 *
 * @category Base Classes
 */
export declare class StrategySub {
    strategyId: number;
    isBundle: boolean;
    actionsData: Array<string>;
    triggersData: Array<string>;
    subProxyAddress: string;
    constructor(strategyId: number, isBundle: boolean, triggersData: Array<string>, actionsData: Array<string>, chainId?: number);
    /**
    * Encode arguments for calling the action set via DsProxy
    * @returns `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`
    */
    encodeForDsProxyCall(): Array<string>;
    encodeForFunctionData(): string;
    encodeForActiveSub(subId: number): Array<string>;
    encodeForDeactiveSub(subId: number): Array<string>;
    encodeForUpdateSubData(subId: number): Array<string>;
}
