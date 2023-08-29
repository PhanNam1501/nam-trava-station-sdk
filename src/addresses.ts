import { CONFIG, NETWORKS } from "./config";
import { EthAddress } from "./types";

export const listAddr = {
  [NETWORKS.bsc.chainId]: {
    //Action address
    TravaAuctionCreateAuction: "0xadD3754309A7bC4c74E58A9AAb8463a591047123",
    TravaAuctionMakeBid: "0xD291b6b7658a016de5a95240F36eea4fb481d228",
    RecipeExecutor: "0xc3A1B8ec1F11A02410e0e1Ef0b34BCD2fBeDC54a",
    DFSProxyRegistry: "0xddAe0A61D662711EC279686dE17EfB1F57253ab5",
    TravaNFTTransfer: "0x7D2AA60a1741a52F66f81EA2acb30e5BF3761A55",
    TravaNFTBuy: "0x5b7a5b6c5685Ec9601e744127A3113d528c7e121",
    TravaNFTCreateSale: "0x8cbdF86a8c1D69500183D4a6200f2c789b1020a5",
    PancakeSwapV2: "0x4503A6D439349B09043d6B33f269005eC9BC065d",
    PullToken: "0x6b0FF321C1B4C27174443E06dfAAdBf5783d74d0",
    WrapBnb: "0xd20B3B10521410bF2C9F165638aC30660C426e3F",
    UnwrapBnb: "0x90B18827C0Ca6e0B2F6b7F1A84d3Cb6BD9baeeAD",
    SendToken: "0x3eaeD39715A10e4B7D47BBe676FA6c9553A2575d",
    SendTokenAndUnwrap: "0x1f144f084B6e9FC4A377D483086FA88fF3AD094d",
    SendTokens: "0x3eaeD39715A10e4B7D47BBe676FA6c9553A2575d",
    TravaSupply: "0x355B322761FEEFde4Fb041aa31ad544B26B6F64d",
    TravaBorrow: "0x31Da583b0F55E988790F6602Cb88aeE62AbACd5A",
    TravaRepay: "0x4e3c45BA8838b33F6eD7345Bd2DB824b589C4CEf",
    TravaWithdraw: "0x92f93da4C46c66ea8C154a93c49663Cf83990244",
    TravaStakingStake: "0x3937F711DB4ec9A0E3E416054cbBc98184127ebF",
    TravaNFTCancelSale: "0xfe9Fc8EDeD36BEe1965b800c5728979fD80eB993",
    // pancake swap
    RouterAddress:"0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3",
    FactoryAddress:"0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc",
    // token address
    WBNBAdress:"0x910CB19698Eac48a6AB7Ccc9542B756f2Bdd67C6",
    USDCAddress:"0x345dCB7B8F17D342A3639d1D9bD649189f2D0162",
    USDTAddress:"0x780397E17dBF97259F3b697Ca3a394fa483A1419",
    DAIAddress:"0xFCcB260C9074faBB69702C1972aa747aAC6e654F",
    ETHAddress:"0xBE2a3B225aDA4142C42A36CfbD5b04F28D261CA8",
    BUSDAddress:"0x2CEC38C779d6b962bc877777b6f70937d21c9c38",
    XVSAddress:"0x45A80229E1FeAb61E360EfA9005B5AB46821Cee7",
    DOTAddress:"0x0642E40c9a12fc3C7a3BFfA47e9E41391cC49Dbe",
    AAVEAddress:"0x3cb48b8e2Ef30a8aD5130ad49b8A6044eA80d1f2",
    ADAAddress:"0x5303A4c5c5D79d086C77E05338fDf6548A1EE09C",
    CAKEAddress:"0x97f04BF5FcFF000e2bF72884E6C33a261F8E8ba9",
    XRPAddress:"0xb868DC5a295489088d3373Ee8d365CeF45c38684",
    DOGEAddress:"0xe4C7E2f0D19335f9B85e4732eb05eFced2f8f2fb",
    TRAVAAddress:"0xE1F005623934D3D8C724EC68Cc9bFD95498D4435",
    TODAddress:"0xFca3Cf5E82F595D4f20C24D007ae5E2e94fab2f0"
  },
};

/**
 *
 * @param name
 * @param chainId
 */
export const getAddr = (
  name: string,
  chainId: number = CONFIG.chainId
): EthAddress => {
  const _chainId: number =
    typeof chainId === "undefined" ? CONFIG.chainId : chainId;

  const actions = listAddr[_chainId];

  // skip this check if we're in testing mode
  if (!CONFIG.testingMode) {
    if (!actions)
      throw new Error(`Cannot find address for chainId: ${_chainId}.`);
    if (!actions[name as keyof typeof actions])
      throw new Error(
        `Cannot find address for name: ${name} (chainId: ${_chainId}).`
      );
  }

  return actions[name as keyof typeof actions]!;
};
