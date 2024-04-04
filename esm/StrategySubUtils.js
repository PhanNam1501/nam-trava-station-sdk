import { CONFIG } from './config';
import SubProxyAbi from './abis/SubProxy.json';
import { getAddr } from './addresses';
import { ethers } from "ethers";
const abiCoder = new ethers.AbiCoder();
/**
 *
 * @category Base Classes
 */
export class StrategySubUtils {
    constructor(chainId) {
        const _chainId = typeof chainId === "undefined" ? CONFIG.chainId : chainId;
        this.subProxyAddress = getAddr('SubProxy', _chainId);
        this.subStorage = getAddr('SubStorage', _chainId);
    }
    encodeForActiveSub(subId) {
        const iface = new ethers.Interface(SubProxyAbi);
        const functionFragment = iface.getFunctionName("activateSub");
        return [
            this.subProxyAddress,
            iface.encodeFunctionData(functionFragment, [subId])
        ];
    }
    encodeForDeactiveSub(subId) {
        const iface = new ethers.Interface(SubProxyAbi);
        const functionFragment = iface.getFunctionName("deactivateSub");
        return [
            this.subProxyAddress,
            iface.encodeFunctionData(functionFragment, [subId])
        ];
    }
}
