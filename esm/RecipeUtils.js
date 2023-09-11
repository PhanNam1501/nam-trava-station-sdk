import AbiCoder from "web3-eth-abi";
import DsProxyAbi from "./abis/DsProxy.json";
export const encodeForDsProxyCall = (action) => {
    const executeAbi = DsProxyAbi.find(({ name }) => name === 'execute');
    return AbiCoder.encodeFunctionCall(executeAbi, action.encodeForDsProxyCall());
};
