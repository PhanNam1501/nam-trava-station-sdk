
import DFSPRoxyRegistyAbi from './abis/DFSProxyRegistry.json';
import ProxyRegistryAbi from './abis/ProxyRegistry.json';
import DsProxyAbi from './abis/DsProxy.json';
import Erc20Abi from './abis/Erc20.json';
import { getAddr } from './addresses';
import { Action } from './Action';
import { Recipe } from './Recipe';
import { CONFIG } from './config';
import { EthAddress } from './types';
import { Contract,InterfaceAbi, JsonRpcProvider } from 'ethers';
// reports error but it works ?????

/**
 *
 * @category Base Classes
 */
export class DfsWeb3 {
  web3: JsonRpcProvider;

  accountReady: boolean;

  account?: EthAddress;

  proxy?: EthAddress;

  constructor(web3: JsonRpcProvider) {
    this.web3 = web3;
    this.accountReady = false;
    this.prepareAccount();
  }

  async prepareAccount() {
    const accounts = await this.web3.listAccounts();
    console.log(accounts);
    if (!accounts || !accounts.length) throw new Error('Supplied web3 has no account');
    this.account = accounts[0].address;
    const DFSPRoxyRegistyAbiItems : InterfaceAbi = DFSPRoxyRegistyAbi
    const dfsRegistryContract  = new Contract(getAddr('DFSProxyRegistry', CONFIG.chainId),DFSPRoxyRegistyAbiItems,this.web3)
    const proxies = await dfsRegistryContract.proxies(this.account);
    if (proxies) {
      this.proxy = proxies;
    }
    this.accountReady = true;
  }

  async createSmartWallet() {
    if (!this.accountReady) await this.prepareAccount();
    if (!this.account) throw new Error('DfsWeb3 has not been instantiated properly');
    if (this.proxy) throw new Error('Account already has DsProxy');
    const ProxyRegistryAbiItems : InterfaceAbi = ProxyRegistryAbi;
    const registryContract = new Contract(getAddr('ProxyRegistry', CONFIG.chainId),ProxyRegistryAbiItems,this.web3 );
    return await registryContract.build();
  }

  /**
   * @param action
   */
  async prepareBeforeExecute(action : Action) : Promise<any> {
    if (!this.accountReady) await this.prepareAccount();
    if (!this.proxy) throw new Error('Account does not have a Smart Wallet');
    const transactions : any = [];
    const approvals = await action.getAssetsToApprove();
    await Promise.all(approvals.map(async (a) => {
      if (a.owner!.toLowerCase() === this.proxy!.toLowerCase()) {
        const Erc20AbiItems : InterfaceAbi = Erc20Abi
        const tokenContract = new Contract( a.assetErc20Abi,Erc20AbiItems,this.web3);
        const allowance = await tokenContract.allowance(this.account, this.proxy);
        if (parseFloat(allowance.toString()) === 0) {
          transactions.push(tokenContract.approve(this.proxy, '-1'));
        }
      }
    }));
    return transactions;
  }

  async execute(address: EthAddress, params: Array<any>) {
    if (!this.accountReady) await this.prepareAccount();
    if (!this.proxy) throw new Error('Account does not have a Smart Wallet. Run createSmartWallet first');
    const DsProxyAbiItems : InterfaceAbi = DsProxyAbi
    const proxyContract = new Contract(this.proxy,DsProxyAbiItems,this.web3 );
    return proxyContract.execute(address, params);
  }

  /**
   * @param action
   */
  async executeAction(action: Action) : Promise<Action> {
    const encoded = action.encodeForDsProxyCall();
    return this.execute(encoded[0] as string, encoded[1] as string[]);
  }

  /**
   * @param recipe
   */
  async executeRecipe(recipe: Recipe) : Promise<Recipe> {
    const encoded = recipe.encodeForDsProxyCall();
    return this.execute(encoded[0] as string, encoded[1] as unknown as string[]);
  }
}
