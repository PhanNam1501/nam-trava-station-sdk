import { CONFIG, NETWORKS } from "./config";
export const actionAddresses = {
    [NETWORKS.bsc.chainId]: {
        TravaAuctionCreateAuction: "0xadD3754309A7bC4c74E58A9AAb8463a591047123",
        TravaAuctionMakeBid: "0xD291b6b7658a016de5a95240F36eea4fb481d228",
        RecipeExecutor: "0xc3A1B8ec1F11A02410e0e1Ef0b34BCD2fBeDC54a",
        DFSProxyRegistry: "0xddAe0A61D662711EC279686dE17EfB1F57253ab5",
        TravaNFTTransfer: "0x7D2AA60a1741a52F66f81EA2acb30e5BF3761A55",
        TravaNFTBuy: "0x735da379efd7Fd1A5AA8D464B0184b6160D44360",
        TravaNFTCreateSale: "0xe1109AeC64861a6E47C899b395dD9C1edec60Fac",
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
        TravaNFTCancelSale: "0xfe9Fc8EDeD36BEe1965b800c5728979fD80eB993"
    },
};
/**
 *
 * @param name
 * @param chainId
 */
export const getAddr = (name, chainId = CONFIG.chainId) => {
    const _chainId = typeof chainId === "undefined" ? CONFIG.chainId : chainId;
    const actions = actionAddresses[_chainId];
    // skip this check if we're in testing mode
    if (!CONFIG.testingMode) {
        if (!actions)
            throw new Error(`Cannot find address for chainId: ${_chainId}.`);
        if (!actions[name])
            throw new Error(`Cannot find address for name: ${name} (chainId: ${_chainId}).`);
    }
    return actions[name];
};
//# sourceMappingURL=addresses.js.map