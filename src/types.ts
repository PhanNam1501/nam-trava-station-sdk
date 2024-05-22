  export type Config = {
    chainId: number,
    testingMode: boolean,
    [key: string]: any,
  };

  export type SwapInfoIfInput ={
    amountIn : string,
    amountOut : string,
    minimumReceive: string,
    priceImpact: number,
    path :EthAddress[]
  }

  export type SwapInfoIfOutput ={
    amountIn : string,
    amountOut : string,
    maximumSold: string,
    priceImpact: number,
    path :EthAddress[]
  }
  
  export type Network = {
    chainId: number;
    chainName: string;
    blockExplorerUrls: Array<string>;
    iconUrls: Array<string>;
    rpcUrls: Array<string>;
    nativeCurrency: { name: string; decimals: number; symbol: string };
  };
  
  export type Networks = {
    bscTestnet:Network,
    bscMainnet:Network,
  };
  
  export type EthAddress = string;
  export type bytes32 = string;
  export type bytes = string | Array<any>;
  export type uint256 = string;
  export type uint32 = string;
  export type uint160 = string;
  export type uint128 = string;
  export type uint80 = string;
  export type uint64 = string;
  export type uint24 = string;
  export type uint16 = string;
  export type uint8 = string;
  export type int256 = string;
  export type int24 = string;
  
  