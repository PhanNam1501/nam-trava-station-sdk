import { Action } from './Action';
import { CONFIG } from './config';
import SubProxyAbi from './abis/SubProxy.json';
import { getAddr } from './addresses';
import AbiCoder from 'web3-eth-abi';
import { ethers } from "ethers";
const abiCoder = new ethers.AbiCoder();


/**
 *
 * @category Base Classes
 */
export class StrategySub {
  strategyId: number;

  isBundle: boolean;

  actionsData: Array<string>;

  triggersData: Array<string>;

  subProxyAddress: string;
  

  constructor(strategyId: number, isBundle: boolean, triggersData: Array<string>, actionsData:Array<string>, chainId?: number) {
    this.strategyId = strategyId;
    this.isBundle = isBundle;
    this.actionsData = actionsData;
    this.triggersData = triggersData

    const _chainId: number =
      typeof chainId === "undefined" ? CONFIG.chainId : chainId;
    this.subProxyAddress = getAddr('SubProxy', _chainId);
  }


  /**
  * Encode arguments for calling the action set via DsProxy
  * @returns `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`
  */
  encodeForDsProxyCall(): Array<string> {
    const iface = new ethers.Interface(SubProxyAbi);
    const functionFragment = iface.getFunctionName("subscribeToStrategy");
    const startegySub = [this.strategyId, this.isBundle, this.triggersData, this.actionsData];
    return [
      this.subProxyAddress,
      iface.encodeFunctionData(functionFragment, [startegySub])
    ];
  }

  encodeForFunctionData():string{
    const iface = new ethers.Interface(SubProxyAbi);
    const functionFragment = iface.getFunctionName("subscribeToStrategy");
    const startegySub = [this.strategyId, this.isBundle, this.triggersData, this.actionsData];
    return iface.encodeFunctionData(functionFragment, [startegySub])
   
  }

  encodeForUpdateSubData(subId:number):Array<string>{
    const iface = new ethers.Interface(SubProxyAbi);
    const functionFragment = iface.getFunctionName("updateSubData");
    const startegySub = [this.strategyId, this.isBundle, this.triggersData, this.actionsData];
    return [
      this.subProxyAddress,
      iface.encodeFunctionData(functionFragment, [subId, startegySub])
    ];
  }

}
