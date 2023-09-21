var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import DFSPRoxyRegistyAbi from './abis/DFSProxyRegistry.json';
import ProxyRegistryAbi from './abis/ProxyRegistry.json';
import DsProxyAbi from './abis/DsProxy.json';
import Erc20Abi from './abis/Bep20.json';
import { getAddr } from './addresses';
import { CONFIG } from './config';
import { Contract } from 'ethers';
// reports error but it works ?????
/**
 *
 * @category Base Classes
 */
export class DfsWeb3 {
    constructor(web3) {
        this.web3 = web3;
        this.accountReady = false;
        this.prepareAccount();
    }
    prepareAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            const accounts = yield this.web3.listAccounts();
            console.log(accounts);
            if (!accounts || !accounts.length)
                throw new Error('Supplied web3 has no account');
            this.account = accounts[0].address;
            const DFSPRoxyRegistyAbiItems = DFSPRoxyRegistyAbi;
            const dfsRegistryContract = new Contract(getAddr('DFSProxyRegistry', CONFIG.chainId), DFSPRoxyRegistyAbiItems, this.web3);
            const proxies = yield dfsRegistryContract.proxies(this.account);
            if (proxies) {
                this.proxy = proxies;
            }
            this.accountReady = true;
        });
    }
    createSmartWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.accountReady)
                yield this.prepareAccount();
            if (!this.account)
                throw new Error('DfsWeb3 has not been instantiated properly');
            if (this.proxy)
                throw new Error('Account already has DsProxy');
            const ProxyRegistryAbiItems = ProxyRegistryAbi;
            const registryContract = new Contract(getAddr('ProxyRegistry', CONFIG.chainId), ProxyRegistryAbiItems, this.web3);
            return yield registryContract.build();
        });
    }
    /**
     * @param action
     */
    prepareBeforeExecute(action) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.accountReady)
                yield this.prepareAccount();
            if (!this.proxy)
                throw new Error('Account does not have a Smart Wallet');
            const transactions = [];
            const approvals = yield action.getAssetsToApprove();
            yield Promise.all(approvals.map((a) => __awaiter(this, void 0, void 0, function* () {
                if (a.owner.toLowerCase() === this.proxy.toLowerCase()) {
                    const Erc20AbiItems = Erc20Abi;
                    const tokenContract = new Contract(a.assetErc20Abi, Erc20AbiItems, this.web3);
                    const allowance = yield tokenContract.allowance(this.account, this.proxy);
                    if (parseFloat(allowance.toString()) === 0) {
                        transactions.push(tokenContract.approve(this.proxy, '-1'));
                    }
                }
            })));
            return transactions;
        });
    }
    execute(address, params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.accountReady)
                yield this.prepareAccount();
            if (!this.proxy)
                throw new Error('Account does not have a Smart Wallet. Run createSmartWallet first');
            const DsProxyAbiItems = DsProxyAbi;
            const proxyContract = new Contract(this.proxy, DsProxyAbiItems, this.web3);
            return proxyContract.execute(address, params);
        });
    }
    /**
     * @param action
     */
    executeAction(action) {
        return __awaiter(this, void 0, void 0, function* () {
            const encoded = action.encodeForDsProxyCall();
            return this.execute(encoded[0], encoded[1]);
        });
    }
    /**
     * @param recipe
     */
    executeRecipe(recipe) {
        return __awaiter(this, void 0, void 0, function* () {
            const encoded = recipe.encodeForDsProxyCall();
            return this.execute(encoded[0], encoded[1]);
        });
    }
}
