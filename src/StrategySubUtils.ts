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
export class StrategySubUtils {

  subProxyAddress: string;
  
  constructor(chainId?: number) {
    const _chainId: number =
      typeof chainId === "undefined" ? CONFIG.chainId : chainId;
    this.subProxyAddress = getAddr('SubProxy', _chainId);
  }

  encodeForActiveSub(subId: number):Array<string>{
    const iface = new ethers.Interface(SubProxyAbi);
    const functionFragment = iface.getFunctionName("activateSub");
    return [
      this.subProxyAddress,
      iface.encodeFunctionData(functionFragment, [subId])
    ];
  }

  encodeForDeactiveSub(subId: number):Array<string>{
    const iface = new ethers.Interface(SubProxyAbi);
    const functionFragment = iface.getFunctionName("deactivateSub");
    return [
      this.subProxyAddress,
      iface.encodeFunctionData(functionFragment, [subId])
    ];
  }

}
