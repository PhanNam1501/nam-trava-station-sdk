"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require("../.."));
const web3_1 = __importDefault(require("web3"));
const Erc20_json_1 = __importDefault(require("../../abis/Erc20.json"));
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const web3 = new web3_1.default("https://data-seed-prebsc-2-s1.bnbchain.org:8545");
        web3.eth.getAccounts = () => __awaiter(this, void 0, void 0, function* () {
            return [
                "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43",
            ];
        });
        const privateKey = "a0c31ec3759513cbdcb60bd0d3f30d298bcede28c06c5dd3b77b2b8219158de6";
        const accountAddr = "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43";
        const account = web3.eth.accounts.privateKeyToAccount(privateKey);
        web3.eth.accounts.wallet.add(account);
        web3.eth.defaultAccount = accountAddr;
        let dfsWeb3;
        dfsWeb3 = new __1.default.DfsWeb3(web3);
        yield dfsWeb3.prepareAccount();
        const Erc20AbiItems = Erc20_json_1.default.map((item) => (Object.assign(Object.assign({}, item), { stateMutability: item.stateMutability, type: item.type })));
        const tokenContract = new web3.eth.Contract(Erc20AbiItems, "0xE1F005623934D3D8C724EC68Cc9bFD95498D4435");
        // approve token
        let approveToken = tokenContract.methods.approve(dfsWeb3.proxy, "100000000000000000000");
        let approveTokenData = approveToken.encodeABI();
        let approveTokenTx = {
            from: accountAddr,
            to: "0xE1F005623934D3D8C724EC68Cc9bFD95498D4435",
            data: approveTokenData,
            gas: 1000000,
            gasPrice: 10000000000,
        };
        let approveTokenTxHash = yield web3.eth.sendTransaction(approveTokenTx);
        console.log("approveTokenTxHash", approveTokenTxHash);
        // check balance of token
        const balance = yield tokenContract.methods.balanceOf(accountAddr).call();
        console.log("balance of admin", balance);
        const r = new __1.default.Recipe("Basic", [
            new __1.default.actions.trava.TravaSupply("0x6df52f798740504c24ccd374cf7ce81b28ce8330", "0xE1F005623934D3D8C724EC68Cc9bFD95498D4435", "10000000000000000000", "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43", dfsWeb3.proxy, true),
            new __1.default.actions.trava.TravaBorrow("0x6df52f798740504c24ccd374cf7ce81b28ce8330", "0xE1F005623934D3D8C724EC68Cc9bFD95498D4435", "10000000", "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43", dfsWeb3.proxy),
            new __1.default.actions.trava.TravaRepay("0x6df52f798740504c24ccd374cf7ce81b28ce8330", "0xE1F005623934D3D8C724EC68Cc9bFD95498D4435", "10000000", "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43", dfsWeb3.proxy),
            new __1.default.actions.trava.TravaWithdraw("0x6df52f798740504c24ccd374cf7ce81b28ce8330", "0xE1F005623934D3D8C724EC68Cc9bFD95498D4435", "10000000000000000000", "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43"),
        ]);
        // console.log("r", r);
        const exec = yield dfsWeb3.executeRecipe(r);
        yield exec
            .send({ from: dfsWeb3.account, gasPrice: 20e9, gasLimit: 2e6 })
            .then(function (receipt) {
            console.log("Transaction Hash:", receipt.transactionHash);
        })
            .catch(console.log);
    });
}
test();
//# sourceMappingURL=trava-market.test.js.map