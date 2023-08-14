var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import dfs from "..";
import Web3 from "web3";
import ERC20ABi from "../abis/Erc20.json";
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const web3 = new Web3("https://bsc-testnet.publicnode.com");
        web3.eth.getAccounts = () => __awaiter(this, void 0, void 0, function* () { return ['0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43']; });
        const privateKey = "a0c31ec3759513cbdcb60bd0d3f30d298bcede28c06c5dd3b77b2b8219158de6";
        const accountAddr = "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43";
        const account = web3.eth.accounts.privateKeyToAccount(privateKey);
        web3.eth.accounts.wallet.add(account);
        web3.eth.defaultAccount = accountAddr;
        let dfsWeb3;
        dfsWeb3 = new dfs.DfsWeb3(web3);
        yield dfsWeb3.prepareAccount();
        const Erc20AbiItems = ERC20ABi.map(item => (Object.assign(Object.assign({}, item), { stateMutability: item.stateMutability, type: item.type })));
        const tokenContract = new web3.eth.Contract(Erc20AbiItems, "0x4ABEf176F22B9a71B45ddc6c4A115095d8761b37");
        tokenContract.methods.approve(dfsWeb3.proxy, "100000000000000000000");
        const r = new dfs.Recipe("Basic", [
            new dfs.actions.basic.PullTokenAction("0x4ABEf176F22B9a71B45ddc6c4A115095d8761b37", "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43", "100000000000000000000"),
            //Wrap 0.02 BNB
            new dfs.actions.basic.WrapBnbAction("20000000000000000"),
            //Send 0.02 WBNB to owner
            new dfs.actions.basic.SendTokenAction("0x910CB19698Eac48a6AB7Ccc9542B756f2Bdd67C6", "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43", "20000000000000000"),
            //Unwrap
            new dfs.actions.basic.UnwrapBnbAction("20000000000000000", "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43")
        ]);
        const exec = yield dfsWeb3.executeRecipe(r);
        yield exec.send({
            from: dfsWeb3.account,
            value: "20000000000000000",
            gasPrice: 1000000000,
            gasLimit: 20000000,
        }).then(function (receipt) {
            console.log('Transaction Hash:', receipt.transactionHash);
        }).catch(console.log);
    });
}
test();
//# sourceMappingURL=test-basic.js.map