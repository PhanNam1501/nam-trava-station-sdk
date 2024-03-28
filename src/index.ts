/* Export types here */
import type {
  EthAddress,
  Config, Network, Networks,
  bytes32, bytes,
  uint256, uint160, uint128, uint80, uint64, uint24, uint16, uint8, int24,
} from './types';

/* Export methods, classes and other here */
import { Action } from './Action';
import { Recipe } from './Recipe';
import { Strategy } from './Strategy';
import { DfsWeb3 } from './DfsWeb3';
import { StrategySub } from './StrategySub';
import { StrategySubUtils } from './StrategySubUtils';
import * as actions from './actions';
import * as triggers from './triggers';
import * as services from './services';

//   import * as utils from './utils';
import { SwapUtil } from './SwapUtils';

import {
  configure, getNetworkData, CONFIG, NETWORKS as networks,
} from './config';
import { listAddr as _listAddresses, getAddr } from './addresses';

export type {
  EthAddress,
  Config, Network, Networks,
  bytes32, bytes,
  uint256, uint160, uint128, uint80, uint64, uint24, uint16, uint8, int24,
};

const listAddressesAllChains = _listAddresses;
const listAddresses = (chainId = null) => _listAddresses[chainId || CONFIG.chainId];


export {
  Action, Recipe, DfsWeb3, Strategy, StrategySub, StrategySubUtils,
  actions, triggers, services, SwapUtil,
  configure, getNetworkData, CONFIG, networks,
  listAddresses, listAddressesAllChains, getAddr,
};

export default {
  Action,
  Recipe,
  DfsWeb3,
  Strategy,
  StrategySub,
  StrategySubUtils,
  actions,
  triggers,
  services,
  // utils,
  configure,
  getNetworkData,
  CONFIG,
  networks,
  listAddresses,
  listAddressesAllChains,
  getAddr,
  SwapUtil

};
