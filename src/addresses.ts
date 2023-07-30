import { CONFIG, NETWORKS } from './config';
import { EthAddress } from './types';

export const actionAddresses = {
  [NETWORKS.bsc.chainId]: {
    TravaAuctionCreateAuction : "0xadD3754309A7bC4c74E58A9AAb8463a591047123",
    TravaAuctionMakeBid:"0xD291b6b7658a016de5a95240F36eea4fb481d228",
    RecipeExecutor:"0xc3A1B8ec1F11A02410e0e1Ef0b34BCD2fBeDC54a",
    DFSProxyRegistry:"0xddAe0A61D662711EC279686dE17EfB1F57253ab5"
  }
};

/**
 *
 * @param name
 * @param chainId
 */
export const getAddr = (name: string, chainId:number = CONFIG.chainId) : EthAddress => {
  const _chainId : number = typeof chainId === 'undefined' ? CONFIG.chainId : chainId;

  const actions = actionAddresses[_chainId];

  // skip this check if we're in testing mode
  if (!CONFIG.testingMode) {
    if (!actions) throw new Error(`Cannot find address for chainId: ${_chainId}.`);
    if (!actions[name as keyof typeof actions]) throw new Error(`Cannot find address for name: ${name} (chainId: ${_chainId}).`);
  }

  return actions[name as keyof typeof actions]!;
};
