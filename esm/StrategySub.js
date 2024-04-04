import { CONFIG } from './config';
import SubProxyAbi from './abis/SubProxy.json';
import { getAddr } from './addresses';
import { ethers } from "ethers";
const abiCoder = new ethers.AbiCoder();
/**
 *
 * @category Base Classes
 */
export class StrategySub {
    constructor(strategyId, isBundle, triggersData, actionsData, chainId) {
        this.strategyId = strategyId;
        this.isBundle = isBundle;
        this.actionsData = actionsData;
        this.triggersData = triggersData;
        const _chainId = typeof chainId === "undefined" ? CONFIG.chainId : chainId;
        this.subProxyAddress = getAddr('SubProxy', _chainId);
    }
    /**
    * Encode arguments for calling the action set via DsProxy
    * @returns `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`
    */
    encodeForDsProxyCall() {
        const iface = new ethers.Interface(SubProxyAbi);
        const functionFragment = iface.getFunctionName("subscribeToStrategy");
        const startegySub = [this.strategyId, this.isBundle, this.triggersData, this.actionsData];
        return [
            this.subProxyAddress,
            iface.encodeFunctionData(functionFragment, [startegySub])
        ];
    }
    encodeForFunctionData() {
        const iface = new ethers.Interface(SubProxyAbi);
        const functionFragment = iface.getFunctionName("subscribeToStrategy");
        const startegySub = [this.strategyId, this.isBundle, this.triggersData, this.actionsData];
        return iface.encodeFunctionData(functionFragment, [startegySub]);
    }
    encodeForUpdateSubData(subId) {
        const iface = new ethers.Interface(SubProxyAbi);
        const functionFragment = iface.getFunctionName("updateSubData");
        const startegySub = [this.strategyId, this.isBundle, this.triggersData, this.actionsData];
        return [
            this.subProxyAddress,
            iface.encodeFunctionData(functionFragment, [subId, startegySub])
        ];
    }
}
