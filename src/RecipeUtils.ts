import AbiCoder from "web3-eth-abi";
import RecipeAbi from "./abis/Recipe.json";
import DsProxyAbi from "./abis/DsProxy.json";
export const encodeForDsProxyCall = (action :any) => {
    const executeAbi :any = DsProxyAbi.find(({ name }) => name === 'execute');
    return AbiCoder.encodeFunctionCall(executeAbi, action.encodeForDsProxyCall());
  }