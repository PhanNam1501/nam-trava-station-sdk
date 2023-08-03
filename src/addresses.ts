import { CONFIG, NETWORKS } from './config';
import { EthAddress } from './types';

export const actionAddresses = {
  [NETWORKS.bsc.chainId]: {
    TravaAuctionCreateAuction : "0xadD3754309A7bC4c74E58A9AAb8463a591047123",
    TravaAuctionMakeBid:"0xD291b6b7658a016de5a95240F36eea4fb481d228",
    RecipeExecutor:"0xc3A1B8ec1F11A02410e0e1Ef0b34BCD2fBeDC54a",
    DFSProxyRegistry:"0xddAe0A61D662711EC279686dE17EfB1F57253ab5",
    TravaNFTTransfer: "0x7D2AA60a1741a52F66f81EA2acb30e5BF3761A55",
    TravaNFTBuy: "0x735da379efd7Fd1A5AA8D464B0184b6160D44360",
    TravaNFTCreateSale: "0xe1109AeC64861a6E47C899b395dD9C1edec60Fac",
    PancakeSwapV2: "0x4503A6D439349B09043d6B33f269005eC9BC065d"
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
