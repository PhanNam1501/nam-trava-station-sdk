import { CONFIG, NETWORKS } from "./config";
import { toChecksumAddress } from 'ethereumjs-util';
export const listAddr = {
    [NETWORKS.bscTestnet.chainId]: {
        //Action address
        TravaAuctionCreateAuction: "0xadD3754309A7bC4c74E58A9AAb8463a591047123",
        TravaAuctionMakeBid: "0xD291b6b7658a016de5a95240F36eea4fb481d228",
        RecipeExecutor: "0xc3A1B8ec1F11A02410e0e1Ef0b34BCD2fBeDC54a",
        DFSProxyRegistry: "0xddAe0A61D662711EC279686dE17EfB1F57253ab5",
        TravaNFTTransfer: "0x7D2AA60a1741a52F66f81EA2acb30e5BF3761A55",
        TravaNFTBuy: "0x859C6B79c3503611b410Bc01d219131e784022e3",
        TravaNFTCreateSale: "0xe169e64496C314398b3f06fD335dbf47B1B6A6Aa",
        TravaNFTCancelSale: "0x118E304cd6Be76666AEf3EDe59f716473475DADD",
        TravaNFTAuctionCancelAuction: "0xA8eB406B2288F3AdDFa3239e3aA9775982d1824F",
        TravaNFTAuctionCreateAuction: "0xeb7a05f382268b36D3c3B05F84Ee4dA213a43f14",
        TravaNFTAuctionEditAuctionPrice: "0x925Fa79927fBb9eB400f9D510F196db1C5Ec9340",
        TravaNFTAuctionFinalizeAuction: "0x99Fc64FB9375A03e8ad7f5E7c45cd8BF87332368",
        TravaNFTAuctionMakeBid: "0xD291b6b7658a016de5a95240F36eea4fb481d228",
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
        TravaClaimRewards: "0xC37a6D456657815dB1fb3A4bcf660E2a135f1C67",
        TravaConvertRewards: "0xA74EC723b099f00Ed33a29c36Ca8B498a9a75B21",
        TravaStakingStake: "0x9C144C1182Eb10D6e3011259F31EfA0757fA302F",
        TravaStakingRedeem: "0x8c08F0a32D764fC8D0E98C5C9FDB1c8eCC777758",
        TravaStakingClaimRewards: "0x5417704fe7D2f3C12B35aF239a42B5b8033A7BF7",
        // pancake swap
        RouterAddress: "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3",
        FactoryAddress: "0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc",
        // token address
        WBNBAdress: "0x910CB19698Eac48a6AB7Ccc9542B756f2Bdd67C6",
        USDCAddress: "0x345dCB7B8F17D342A3639d1D9bD649189f2D0162",
        USDTAddress: "0x780397E17dBF97259F3b697Ca3a394fa483A1419",
        DAIAddress: "0xFCcB260C9074faBB69702C1972aa747aAC6e654F",
        ETHAddress: "0xBE2a3B225aDA4142C42A36CfbD5b04F28D261CA8",
        BUSDAddress: "0x2CEC38C779d6b962bc877777b6f70937d21c9c38",
        XVSAddress: "0x45A80229E1FeAb61E360EfA9005B5AB46821Cee7",
        DOTAddress: "0x0642E40c9a12fc3C7a3BFfA47e9E41391cC49Dbe",
        AAVEAddress: "0x3cb48b8e2Ef30a8aD5130ad49b8A6044eA80d1f2",
        ADAAddress: "0x5303A4c5c5D79d086C77E05338fDf6548A1EE09C",
        CAKEAddress: "0x97f04BF5FcFF000e2bF72884E6C33a261F8E8ba9",
        XRPAddress: "0xb868DC5a295489088d3373Ee8d365CeF45c38684",
        DOGEAddress: "0xe4C7E2f0D19335f9B85e4732eb05eFced2f8f2fb",
        TRAVAAddress: "0xE1F005623934D3D8C724EC68Cc9bFD95498D4435",
        TODAddress: "0xFca3Cf5E82F595D4f20C24D007ae5E2e94fab2f0"
    },
    [NETWORKS.bscMainnet.chainId]: {
        //Action address
        DFSProxyRegistry: "0x147f157cB4E328e9C0DB68dBa5305FB7C29e7328",
        RecipeExecutor: "0x8185f9a9ecE74Fe4dC665F5aF64F11E65bD0259a",
        TravaAuctionCreateAuction: "0xadD3754309A7bC4c74E58A9AAb8463a591047123",
        TravaAuctionMakeBid: "0xD291b6b7658a016de5a95240F36eea4fb481d228",
        TravaNFTTransfer: "0x184f1Db63E5536B3Ac8170Aca930e1A635e6cF67",
        TravaNFTBuy: "0xCc1B184Bbb1144383683f6D9180440e075e61312",
        TravaNFTCreateSale: "0xC4FbE950EfE866bcF1518EE04cFd53192Da5708e",
        TravaNFTCancelSale: "0x507ee79174a7951F21E363eca00f68d01C69BB80",
        TravaNFTAuctionCancelAuction: "0xE9072a41E66B4a44C7c60fBA407b36C0F3044656",
        TravaNFTAuctionCreateAuction: "0x53E08293A48092C7715FFF75C4f7708A4043AEd7",
        TravaNFTAuctionEditAuctionPrice: "0x6B4e1833E64c10544f870c1c92Db70f66b4685d9",
        TravaNFTAuctionFinalizeAuction: "0x710896b925dBBadAb6152fB0ec4602374B8B34DF",
        TravaNFTAuctionMakeBid: "0x1F3bE2e857333bf15c8A3b8C8eB1394b9e6F331E",
        PancakeSwapV2: "0xB262bA9ceF87eb61E21332C2c63dfEb709BC53a2",
        PullToken: "0xFA9441ece8F1d27b6EF462a6F6C298b62B905AC7",
        WrapBnb: "0xc0F8ab3BC2bF8CdaB2508E93b2536f4AFc5620dF",
        UnwrapBnb: "0xB83b83d83A7e0ab4a0012ced0959B472F9639C53",
        SendToken: "0xE73f2a7e35F588e65db67a8eF744342904964000",
        SendTokenAndUnwrap: "0x1f144f084B6e9FC4A377D483086FA88fF3AD094d",
        SendTokens: "0x3eaeD39715A10e4B7D47BBe676FA6c9553A2575d",
        TravaSupply: "0x720Ffea4337fcE72DcD3E30A2bD128Ef6ECaB57E",
        TravaBorrow: "0x968df742DbE144010Db52924a16b4f82203CaF66",
        TravaRepay: "0x2f2df0D329D3B8F1C82BD49Bc10bc2cd428ED665",
        TravaWithdraw: "0x6B9766FBB57b299eF757c58E066191cD03801705",
        TravaClaimRewards: "0x904B65716A5e6cA937af77B4498C0Bca14eCca57",
        TravaConvertRewards: "0xB4f02C99488938D9F0703b3929d1B6Fb36860eD4",
        TravaStakingStake: "0x98De3e52B649E6Fe755618a12C2fF4EFEc8CeAfe",
        TravaStakingRedeem: "0xc25Ac9F3Fc69d8EAE396eb4dfcE7D805D1650E71",
        TravaStakingClaimRewards: "0xaAB14589dc039D2b06655E19e6304F9FcB34c285",
        // pancake swap
        RouterAddress: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
        FactoryAddress: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
        // token address
        WBNBAdress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    },
};
/**
 *
 * @param name
 * @param chainId
 */
export const getAddr = (name, chainId = CONFIG.chainId) => {
    const _chainId = typeof chainId === "undefined" ? CONFIG.chainId : chainId;
    const actions = listAddr[_chainId];
    // skip this check if we're in testing mode
    if (!CONFIG.testingMode) {
        if (!actions)
            throw new Error(`Cannot find address for chainId: ${_chainId}.`);
        if (!actions[name])
            throw new Error(`Cannot find address for name: ${name} (chainId: ${_chainId}).`);
    }
    return actions[name];
};
export const convertHexStringToAddress = (hexString) => {
    String(hexString).toLowerCase();
    const strippedHex = hexString.replace(/^0x/, '');
    return toChecksumAddress(`0x${strippedHex}`);
};
