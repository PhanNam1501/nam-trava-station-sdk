import { Action } from './Action';
import { CONFIG } from './config';
import SubProxyAbi from './abis/SubProxy.json';
import SubStorageAbi from './abis/SubStorage.json';
import { getAddr } from './addresses';
import AbiCoder from 'web3-eth-abi';
import { ethers } from "ethers";
import { EthAddress } from './types';
const abiCoder = new ethers.AbiCoder();


/**
 *
 * @category Base Classes
 */
export class StrategySubUtils {

  subProxyAddress: string;
  subStorage: string;

  constructor(chainId?: number) {
    const _chainId: number =
      typeof chainId === "undefined" ? CONFIG.chainId : chainId;
    this.subProxyAddress = getAddr('SubProxy', _chainId);
    this.subStorage = getAddr('SubStorage', _chainId);

  }

  encodeForActiveSub(subId: number): Array<string> {
    const iface = new ethers.Interface(SubProxyAbi);
    const functionFragment = iface.getFunctionName("activateSub");
    return [
      this.subProxyAddress,
      iface.encodeFunctionData(functionFragment, [subId])
    ];
  }

  encodeForDeactiveSub(subId: number): Array<string> {
    const iface = new ethers.Interface(SubProxyAbi);
    const functionFragment = iface.getFunctionName("deactivateSub");
    return [
      this.subProxyAddress,
      iface.encodeFunctionData(functionFragment, [subId])
    ];
  }

//   async getUserProxy(subId: number): Promise<EthAddress> {
//     // const iface = new ethers.Interface(StrategyStorageAbi);
//     const contract = new ethers.Contract(this.subStorage, SubStorageAbi);
//     const storedData = await contract.strategiesSubs(subId);
//     await storedData;
//     return storedData.userProxy;
//   }
}
