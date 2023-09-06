import { Contract, Wallet,InterfaceAbi, JsonRpcProvider, JsonRpcSigner } from "ethers";
import { DfsWeb3, Recipe, actions } from "../../src";
import DsProxyAbi from "../../src/abis/DsProxy.json"
import Bep20Abi from "../../src/abis/Bep20.json"

async function test() {
   
    const provider  = new JsonRpcProvider("https://bsc-testnet.publicnode.com");
    const wallet = new Wallet("",provider);
    const recipe = new Recipe("Stake and Reedeem Recipe",
    [
        new actions.trava.TravaStakingStake(
            "0x1120e28f5d9eeabfc18afe9600315c6c184b9fcf",
            "0x826D824BE55A403859A6Db67D5EeC5aC386307fE",
            "10000000000000000000"),
        new actions.trava.TravaStakingRedeem(
        "0x1120e28f5d9eeabfc18afe9600315c6c184b9fcf",
        "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43",
        "8000000000000000000")
    ]
    );
    const bep20Contract = new Contract("0x41Ad43Ae987F7bE3B5024E7B167f81772f097D5b",Bep20Abi,wallet)
    const proxyContract = new Contract("0x826D824BE55A403859A6Db67D5EeC5aC386307fE",DsProxyAbi,wallet);
    console.log("start approve");
    // await bep20Contract.approve("0x826D824BE55A403859A6Db67D5EeC5aC386307fE","10000000000000000000")
    const encoded = recipe.encodeForDsProxyCall();
    console.log(encoded)
    await proxyContract["execute(address,bytes)"](encoded[0] as string, encoded[1] as unknown as string[])

}

test();
