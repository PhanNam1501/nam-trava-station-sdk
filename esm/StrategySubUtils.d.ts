/**
 *
 * @category Base Classes
 */
export declare class StrategySubUtils {
    subProxyAddress: string;
    constructor(chainId?: number);
    encodeForActiveSub(subId: number): Array<string>;
    encodeForDeactiveSub(subId: number): Array<string>;
}
