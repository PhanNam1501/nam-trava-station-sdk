import dfs from "..";
import Web3 from "web3";
import Dec from "decimal.js";

async function test() {
  const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");
  web3.eth.getAccounts =async () => ['0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43'];
  const privateKey = "a0c31ec3759513cbdcb60bd0d3f30d298bcede28c06c5dd3b77b2b8219158de6";
  const accountAddr = "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43";
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  web3.eth.accounts.wallet.add(account);
  web3.eth.defaultAccount = accountAddr;
  let dfsWeb3;
  dfsWeb3 = new dfs.DfsWeb3(web3);
  await dfsWeb3.prepareAccount();

  // Luồng: Swap từ WBNB sang trava -> Dùng trava mua nft -> Transfer NFT đó cho người khác -> Bán 1 con NFT bất kỳ

  // Trước khi test: 
  // - Ví metamask phải có WBNB từ trước (swap)
  // - Phải approve NFTERC721 cho smart wallet từ trước (transfer, createSale)
  // - Phải approve cho smart wallet dùng WBNB (swap)
  // - Phải approve cho smart wallet dùng trava (buy)

  // Có thể cải tiến contract. Khi swap WBNB sang trava, gửi luôn vào smart wallet thì trong hàm mua nft không cần approve. Sẽ tiết kiệm được 1 transaction approve trava, có thể sửa pullTokenIfNeeded

  const r = new dfs.Recipe("Hieu", [
    new dfs.actions.pancake.PancakeSwapV2(
      new Dec("0.0001")
        .mul(10 ** 18)
        .floor()
        .toString(),
      "0", 
      [
        "0xae13d989dac2f0debff460ac112a837c89baa7cd", // WBNB
        "0x4ABEf176F22B9a71B45ddc6c4A115095d8761b37" // TRAVA
      ], 
      accountAddr, 
      "2688452425",
      accountAddr
    ),
    new dfs.actions.trava.TravaNFTBuy(
      "4210", // *** ID của NFT muốn mua
      accountAddr,
      accountAddr
    ),
    new dfs.actions.trava.TravaNFTTransfer(
      accountAddr,
      "0x0d7a757EECAbfe8daa06E9ab8F106911d846D8a1",
      "4210" // *** ID của NFT muốn transfer
    ),
    new dfs.actions.trava.TravaNFTCreateSale(
      "5332", // *** ID của NFT muốn bán
      new Dec("10")
        .mul(10 ** 18)
        .floor()
        .toString(),
      accountAddr
    ),
  ]);
  const exec: any = await dfsWeb3.executeRecipe(r);

  await exec.send({
    from: dfsWeb3.account,
    gasPrice: 1000000000,
    gasLimit: 20000000,
  }).then(function(receipt: any){
    console.log('Transaction Hash:', receipt.transactionHash);
  }).catch(console.log); 
}
test()
