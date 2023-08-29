import dfs from "../..";
import Web3 from "web3";
import Dec from "decimal.js";
import ERC20ABi from "../../src/abis/Bep20.json";
import { AbiItem, StateMutabilityType, AbiType } from "web3-utils";

async function test() {
  const web3 = new Web3("https://data-seed-prebsc-2-s1.bnbchain.org:8545");
  web3.eth.getAccounts = async () => [
    "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43",
  ];
  const privateKey =
    "a0c31ec3759513cbdcb60bd0d3f30d298bcede28c06c5dd3b77b2b8219158de6";
  const accountAddr = "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43";
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  web3.eth.accounts.wallet.add(account);
  web3.eth.defaultAccount = accountAddr;
  let dfsWeb3;
  dfsWeb3 = new dfs.DfsWeb3(web3);
  await dfsWeb3.prepareAccount();

  const Erc20AbiItems: AbiItem[] = ERC20ABi.map((item) => ({
    ...item,
    stateMutability: item.stateMutability as StateMutabilityType,
    type: item.type as AbiType,
  }));
  const tokenContract = new web3.eth.Contract(
    Erc20AbiItems,
    "0xE1F005623934D3D8C724EC68Cc9bFD95498D4435"
  );

  // approve token
  let approveToken = tokenContract.methods.approve(
    dfsWeb3.proxy,
    "100000000000000000000"
  );
  let approveTokenData = approveToken.encodeABI();
  let approveTokenTx = {
    from: accountAddr,
    to: "0xE1F005623934D3D8C724EC68Cc9bFD95498D4435",
    data: approveTokenData,
    gas: 1000000,
    gasPrice: 10000000000,
  };
  let approveTokenTxHash = await web3.eth.sendTransaction(approveTokenTx);
  console.log("approveTokenTxHash", approveTokenTxHash);

  // check balance of token
  const balance = await tokenContract.methods.balanceOf(accountAddr).call();
  console.log("balance of admin", balance);

  const r = new dfs.Recipe("Basic", [
    new dfs.actions.trava.TravaSupply(
      "0x6df52f798740504c24ccd374cf7ce81b28ce8330",
      "0xE1F005623934D3D8C724EC68Cc9bFD95498D4435",
      "10000000000000000000",
      "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43",
      dfsWeb3.proxy!,
      true
    ),
    new dfs.actions.trava.TravaBorrow(
      "0x6df52f798740504c24ccd374cf7ce81b28ce8330",
      "0xE1F005623934D3D8C724EC68Cc9bFD95498D4435",
      "10000000",
      "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43",
      dfsWeb3.proxy!
    ),
    new dfs.actions.trava.TravaRepay(
      "0x6df52f798740504c24ccd374cf7ce81b28ce8330",
      "0xE1F005623934D3D8C724EC68Cc9bFD95498D4435",
      "10000000",
      "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43",
      dfsWeb3.proxy!
    ),
    new dfs.actions.trava.TravaWithdraw(
      "0x6df52f798740504c24ccd374cf7ce81b28ce8330",
      "0xE1F005623934D3D8C724EC68Cc9bFD95498D4435",
      "10000000000000000000",
      "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43"
    ),
  ]);

  // console.log("r", r);

  const exec: any = await dfsWeb3.executeRecipe(r);

  await exec
    .send({ from: dfsWeb3.account, gasPrice: 20e9, gasLimit: 2e6 })
    .then(function (receipt: any) {
      console.log("Transaction Hash:", receipt.transactionHash);
    })
    .catch(console.log);
}

test();
