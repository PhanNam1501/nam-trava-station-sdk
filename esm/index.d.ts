import type { EthAddress, Config, Network, Networks, bytes32, bytes, uint256, uint160, uint128, uint80, uint64, uint24, uint16, uint8, int24 } from './types';
import { Action } from './Action';
import { Recipe } from './Recipe';
import { DfsWeb3 } from './DfsWeb3';
import * as actions from './actions';
import { SwapUtil } from './SwapUtils';
import { configure, getNetworkData, CONFIG, NETWORKS as networks } from './config';
import { getAddr } from './addresses';
export type { EthAddress, Config, Network, Networks, bytes32, bytes, uint256, uint160, uint128, uint80, uint64, uint24, uint16, uint8, int24, };
declare const listAddressesAllChains: {
    [x: number]: {
        GranarySupply: string;
        GranaryBorrow: string;
        GranaryRepay: string;
        GranaryWithdraw: string;
        RadiantSupply: string;
        RadiantBorrow: string;
        RadiantRepay: string;
        RadiantWithdraw: string;
        WePiggySupply: string;
        WePiggyBorrow: string;
        WePiggyRepay: string;
        WePiggyWithdraw: string;
        LiqeeSupply: string;
        LiqeeBorrow: string;
        LiqeeRepay: string;
        LiqeeWithdraw: string;
        CreamSupply: string;
        CreamBorrow: string;
        CreamRepay: string;
        CreamWithdraw: string;
        VenusWithdraw: string;
        VenusRepay: string;
        VenusBorrow: string;
        VenusSupply: string;
        TravaNFTExpeditionWithdraw: string;
        TravaNFTExpeditionDeploy: string;
        TravaNFTExpeditionAbandon: string;
        TravaNFTVeTravaBuy: string;
        TravaNFTVeTravaCreateSale: string;
        TravaNFTVeTravaCancelSale: string;
        TravaNFTHeuristicFarmingPolish: string;
        TravaNFTHeuristicFarmingWithdraw: string;
        TravaNFTHeuristicFarmingClaimReward: string;
        TravaNFTHeuristicFarmingStake: string;
        TravaAuctionCreateAuction: string;
        TravaAuctionMakeBid: string;
        RecipeExecutor: string;
        DFSProxyRegistry: string;
        TravaNFTTransfer: string;
        TravaNFTBuy: string;
        TravaNFTCreateSale: string;
        TravaNFTCancelSale: string;
        TravaNFTAuctionCancelAuction: string;
        TravaNFTAuctionCreateAuction: string;
        TravaNFTAuctionEditAuctionPrice: string;
        TravaNFTAuctionFinalizeAuction: string;
        TravaNFTAuctionMakeBid: string;
        PancakeSwapV2: string;
        PullToken: string;
        WrapBnb: string;
        UnwrapBnb: string;
        SendToken: string;
        SendTokenAndUnwrap: string;
        SendTokens: string;
        TravaSupply: string;
        TravaBorrow: string;
        TravaRepay: string;
        TravaWithdraw: string;
        TravaClaimRewards: string;
        TravaConvertRewards: string;
        TravaStakingStake: string;
        TravaStakingRedeem: string;
        TravaStakingClaimRewards: string;
        RouterAddress: string;
        FactoryAddress: string;
        WBNBAddress: string;
        USDCAddress: string;
        USDTAddress: string;
        DAIAddress: string;
        ETHAddress: string;
        XVSAddress: string;
        DOTAddress: string;
        AAVEAddress: string;
        ADAAddress: string;
        CAKEAddress: string;
        XRPAddress: string;
        DOGEAddress: string;
        TRAVAAddress: string;
        BUSDAddress: string;
        TODAddress: string;
        LiquidityCampaignBuyToken: string;
    } | {
        DFSProxyRegistry: string;
        RecipeExecutor: string;
        TravaAuctionCreateAuction: string;
        TravaAuctionMakeBid: string;
        TravaNFTTransfer: string;
        TravaNFTBuy: string;
        TravaNFTCreateSale: string;
        TravaNFTCancelSale: string;
        TravaNFTAuctionCancelAuction: string;
        TravaNFTAuctionCreateAuction: string;
        TravaNFTAuctionEditAuctionPrice: string;
        TravaNFTAuctionFinalizeAuction: string;
        TravaNFTAuctionMakeBid: string;
        PancakeSwapV2: string;
        PullToken: string;
        WrapBnb: string;
        UnwrapBnb: string;
        SendToken: string;
        SendTokenAndUnwrap: string;
        SendTokens: string;
        TravaSupply: string;
        TravaBorrow: string;
        TravaRepay: string;
        TravaWithdraw: string;
        TravaClaimRewards: string;
        TravaConvertRewards: string;
        TravaStakingStake: string;
        TravaStakingRedeem: string;
        TravaStakingClaimRewards: string;
        RouterAddress: string;
        FactoryAddress: string;
        TRAVAAddress: string;
        WBNBAddress: string;
        TODAddress: string;
        BUSDAddress: string;
        LiquidityCampaignBuyToken: string;
        GranarySupply?: undefined;
        GranaryBorrow?: undefined;
        GranaryRepay?: undefined;
        GranaryWithdraw?: undefined;
        RadiantSupply?: undefined;
        RadiantBorrow?: undefined;
        RadiantRepay?: undefined;
        RadiantWithdraw?: undefined;
        WePiggySupply?: undefined;
        WePiggyBorrow?: undefined;
        WePiggyRepay?: undefined;
        WePiggyWithdraw?: undefined;
        LiqeeSupply?: undefined;
        LiqeeBorrow?: undefined;
        LiqeeRepay?: undefined;
        LiqeeWithdraw?: undefined;
        CreamSupply?: undefined;
        CreamBorrow?: undefined;
        CreamRepay?: undefined;
        CreamWithdraw?: undefined;
        VenusWithdraw?: undefined;
        VenusRepay?: undefined;
        VenusBorrow?: undefined;
        VenusSupply?: undefined;
        TravaNFTExpeditionWithdraw?: undefined;
        TravaNFTExpeditionDeploy?: undefined;
        TravaNFTExpeditionAbandon?: undefined;
        TravaNFTVeTravaBuy?: undefined;
        TravaNFTVeTravaCreateSale?: undefined;
        TravaNFTVeTravaCancelSale?: undefined;
        TravaNFTHeuristicFarmingPolish?: undefined;
        TravaNFTHeuristicFarmingWithdraw?: undefined;
        TravaNFTHeuristicFarmingClaimReward?: undefined;
        TravaNFTHeuristicFarmingStake?: undefined;
        USDCAddress?: undefined;
        USDTAddress?: undefined;
        DAIAddress?: undefined;
        ETHAddress?: undefined;
        XVSAddress?: undefined;
        DOTAddress?: undefined;
        AAVEAddress?: undefined;
        ADAAddress?: undefined;
        CAKEAddress?: undefined;
        XRPAddress?: undefined;
        DOGEAddress?: undefined;
    };
};
declare const listAddresses: (chainId?: null) => {
    GranarySupply: string;
    GranaryBorrow: string;
    GranaryRepay: string;
    GranaryWithdraw: string;
    RadiantSupply: string;
    RadiantBorrow: string;
    RadiantRepay: string;
    RadiantWithdraw: string;
    WePiggySupply: string;
    WePiggyBorrow: string;
    WePiggyRepay: string;
    WePiggyWithdraw: string;
    LiqeeSupply: string;
    LiqeeBorrow: string;
    LiqeeRepay: string;
    LiqeeWithdraw: string;
    CreamSupply: string;
    CreamBorrow: string;
    CreamRepay: string;
    CreamWithdraw: string;
    VenusWithdraw: string;
    VenusRepay: string;
    VenusBorrow: string;
    VenusSupply: string;
    TravaNFTExpeditionWithdraw: string;
    TravaNFTExpeditionDeploy: string;
    TravaNFTExpeditionAbandon: string;
    TravaNFTVeTravaBuy: string;
    TravaNFTVeTravaCreateSale: string;
    TravaNFTVeTravaCancelSale: string;
    TravaNFTHeuristicFarmingPolish: string;
    TravaNFTHeuristicFarmingWithdraw: string;
    TravaNFTHeuristicFarmingClaimReward: string;
    TravaNFTHeuristicFarmingStake: string;
    TravaAuctionCreateAuction: string;
    TravaAuctionMakeBid: string;
    RecipeExecutor: string;
    DFSProxyRegistry: string;
    TravaNFTTransfer: string;
    TravaNFTBuy: string;
    TravaNFTCreateSale: string;
    TravaNFTCancelSale: string;
    TravaNFTAuctionCancelAuction: string;
    TravaNFTAuctionCreateAuction: string;
    TravaNFTAuctionEditAuctionPrice: string;
    TravaNFTAuctionFinalizeAuction: string;
    TravaNFTAuctionMakeBid: string;
    PancakeSwapV2: string;
    PullToken: string;
    WrapBnb: string;
    UnwrapBnb: string;
    SendToken: string;
    SendTokenAndUnwrap: string;
    SendTokens: string;
    TravaSupply: string;
    TravaBorrow: string;
    TravaRepay: string;
    TravaWithdraw: string;
    TravaClaimRewards: string;
    TravaConvertRewards: string;
    TravaStakingStake: string;
    TravaStakingRedeem: string;
    TravaStakingClaimRewards: string;
    RouterAddress: string;
    FactoryAddress: string;
    WBNBAddress: string;
    USDCAddress: string;
    USDTAddress: string;
    DAIAddress: string;
    ETHAddress: string;
    XVSAddress: string;
    DOTAddress: string;
    AAVEAddress: string;
    ADAAddress: string;
    CAKEAddress: string;
    XRPAddress: string;
    DOGEAddress: string;
    TRAVAAddress: string;
    BUSDAddress: string;
    TODAddress: string;
    LiquidityCampaignBuyToken: string;
} | {
    DFSProxyRegistry: string;
    RecipeExecutor: string;
    TravaAuctionCreateAuction: string;
    TravaAuctionMakeBid: string;
    TravaNFTTransfer: string;
    TravaNFTBuy: string;
    TravaNFTCreateSale: string;
    TravaNFTCancelSale: string;
    TravaNFTAuctionCancelAuction: string;
    TravaNFTAuctionCreateAuction: string;
    TravaNFTAuctionEditAuctionPrice: string;
    TravaNFTAuctionFinalizeAuction: string;
    TravaNFTAuctionMakeBid: string;
    PancakeSwapV2: string;
    PullToken: string;
    WrapBnb: string;
    UnwrapBnb: string;
    SendToken: string;
    SendTokenAndUnwrap: string;
    SendTokens: string;
    TravaSupply: string;
    TravaBorrow: string;
    TravaRepay: string;
    TravaWithdraw: string;
    TravaClaimRewards: string;
    TravaConvertRewards: string;
    TravaStakingStake: string;
    TravaStakingRedeem: string;
    TravaStakingClaimRewards: string;
    RouterAddress: string;
    FactoryAddress: string;
    TRAVAAddress: string;
    WBNBAddress: string;
    TODAddress: string;
    BUSDAddress: string;
    LiquidityCampaignBuyToken: string;
    GranarySupply?: undefined;
    GranaryBorrow?: undefined;
    GranaryRepay?: undefined;
    GranaryWithdraw?: undefined;
    RadiantSupply?: undefined;
    RadiantBorrow?: undefined;
    RadiantRepay?: undefined;
    RadiantWithdraw?: undefined;
    WePiggySupply?: undefined;
    WePiggyBorrow?: undefined;
    WePiggyRepay?: undefined;
    WePiggyWithdraw?: undefined;
    LiqeeSupply?: undefined;
    LiqeeBorrow?: undefined;
    LiqeeRepay?: undefined;
    LiqeeWithdraw?: undefined;
    CreamSupply?: undefined;
    CreamBorrow?: undefined;
    CreamRepay?: undefined;
    CreamWithdraw?: undefined;
    VenusWithdraw?: undefined;
    VenusRepay?: undefined;
    VenusBorrow?: undefined;
    VenusSupply?: undefined;
    TravaNFTExpeditionWithdraw?: undefined;
    TravaNFTExpeditionDeploy?: undefined;
    TravaNFTExpeditionAbandon?: undefined;
    TravaNFTVeTravaBuy?: undefined;
    TravaNFTVeTravaCreateSale?: undefined;
    TravaNFTVeTravaCancelSale?: undefined;
    TravaNFTHeuristicFarmingPolish?: undefined;
    TravaNFTHeuristicFarmingWithdraw?: undefined;
    TravaNFTHeuristicFarmingClaimReward?: undefined;
    TravaNFTHeuristicFarmingStake?: undefined;
    USDCAddress?: undefined;
    USDTAddress?: undefined;
    DAIAddress?: undefined;
    ETHAddress?: undefined;
    XVSAddress?: undefined;
    DOTAddress?: undefined;
    AAVEAddress?: undefined;
    ADAAddress?: undefined;
    CAKEAddress?: undefined;
    XRPAddress?: undefined;
    DOGEAddress?: undefined;
};
export { Action, Recipe, DfsWeb3, actions, SwapUtil, configure, getNetworkData, CONFIG, networks, listAddresses, listAddressesAllChains, getAddr, };
declare const _default: {
    Action: typeof Action;
    Recipe: typeof Recipe;
    DfsWeb3: typeof DfsWeb3;
    actions: typeof actions;
    configure: (config: Config) => void;
    getNetworkData: (chainId: number) => Network;
    CONFIG: Config;
    networks: Networks;
    listAddresses: (chainId?: null) => {
        GranarySupply: string;
        GranaryBorrow: string;
        GranaryRepay: string;
        GranaryWithdraw: string;
        RadiantSupply: string;
        RadiantBorrow: string;
        RadiantRepay: string;
        RadiantWithdraw: string;
        WePiggySupply: string;
        WePiggyBorrow: string;
        WePiggyRepay: string;
        WePiggyWithdraw: string;
        LiqeeSupply: string;
        LiqeeBorrow: string;
        LiqeeRepay: string;
        LiqeeWithdraw: string;
        CreamSupply: string;
        CreamBorrow: string;
        CreamRepay: string;
        CreamWithdraw: string;
        VenusWithdraw: string;
        VenusRepay: string;
        VenusBorrow: string;
        VenusSupply: string;
        TravaNFTExpeditionWithdraw: string;
        TravaNFTExpeditionDeploy: string;
        TravaNFTExpeditionAbandon: string;
        TravaNFTVeTravaBuy: string;
        TravaNFTVeTravaCreateSale: string;
        TravaNFTVeTravaCancelSale: string;
        TravaNFTHeuristicFarmingPolish: string;
        TravaNFTHeuristicFarmingWithdraw: string;
        TravaNFTHeuristicFarmingClaimReward: string;
        TravaNFTHeuristicFarmingStake: string;
        TravaAuctionCreateAuction: string;
        TravaAuctionMakeBid: string;
        RecipeExecutor: string;
        DFSProxyRegistry: string;
        TravaNFTTransfer: string;
        TravaNFTBuy: string;
        TravaNFTCreateSale: string;
        TravaNFTCancelSale: string;
        TravaNFTAuctionCancelAuction: string;
        TravaNFTAuctionCreateAuction: string;
        TravaNFTAuctionEditAuctionPrice: string;
        TravaNFTAuctionFinalizeAuction: string;
        TravaNFTAuctionMakeBid: string;
        PancakeSwapV2: string;
        PullToken: string;
        WrapBnb: string;
        UnwrapBnb: string;
        SendToken: string;
        SendTokenAndUnwrap: string;
        SendTokens: string;
        TravaSupply: string;
        TravaBorrow: string;
        TravaRepay: string;
        TravaWithdraw: string;
        TravaClaimRewards: string;
        TravaConvertRewards: string;
        TravaStakingStake: string;
        TravaStakingRedeem: string;
        TravaStakingClaimRewards: string;
        RouterAddress: string;
        FactoryAddress: string;
        WBNBAddress: string;
        USDCAddress: string;
        USDTAddress: string;
        DAIAddress: string;
        ETHAddress: string;
        XVSAddress: string;
        DOTAddress: string;
        AAVEAddress: string;
        ADAAddress: string;
        CAKEAddress: string;
        XRPAddress: string;
        DOGEAddress: string;
        TRAVAAddress: string;
        BUSDAddress: string;
        TODAddress: string;
        LiquidityCampaignBuyToken: string;
    } | {
        DFSProxyRegistry: string;
        RecipeExecutor: string;
        TravaAuctionCreateAuction: string;
        TravaAuctionMakeBid: string;
        TravaNFTTransfer: string;
        TravaNFTBuy: string;
        TravaNFTCreateSale: string;
        TravaNFTCancelSale: string;
        TravaNFTAuctionCancelAuction: string;
        TravaNFTAuctionCreateAuction: string;
        TravaNFTAuctionEditAuctionPrice: string;
        TravaNFTAuctionFinalizeAuction: string;
        TravaNFTAuctionMakeBid: string;
        PancakeSwapV2: string;
        PullToken: string;
        WrapBnb: string;
        UnwrapBnb: string;
        SendToken: string;
        SendTokenAndUnwrap: string;
        SendTokens: string;
        TravaSupply: string;
        TravaBorrow: string;
        TravaRepay: string;
        TravaWithdraw: string;
        TravaClaimRewards: string;
        TravaConvertRewards: string;
        TravaStakingStake: string;
        TravaStakingRedeem: string;
        TravaStakingClaimRewards: string;
        RouterAddress: string;
        FactoryAddress: string;
        TRAVAAddress: string;
        WBNBAddress: string;
        TODAddress: string;
        BUSDAddress: string;
        LiquidityCampaignBuyToken: string;
        GranarySupply?: undefined;
        GranaryBorrow?: undefined;
        GranaryRepay?: undefined;
        GranaryWithdraw?: undefined;
        RadiantSupply?: undefined;
        RadiantBorrow?: undefined;
        RadiantRepay?: undefined;
        RadiantWithdraw?: undefined;
        WePiggySupply?: undefined;
        WePiggyBorrow?: undefined;
        WePiggyRepay?: undefined;
        WePiggyWithdraw?: undefined;
        LiqeeSupply?: undefined;
        LiqeeBorrow?: undefined;
        LiqeeRepay?: undefined;
        LiqeeWithdraw?: undefined;
        CreamSupply?: undefined;
        CreamBorrow?: undefined;
        CreamRepay?: undefined;
        CreamWithdraw?: undefined;
        VenusWithdraw?: undefined;
        VenusRepay?: undefined;
        VenusBorrow?: undefined;
        VenusSupply?: undefined;
        TravaNFTExpeditionWithdraw?: undefined;
        TravaNFTExpeditionDeploy?: undefined;
        TravaNFTExpeditionAbandon?: undefined;
        TravaNFTVeTravaBuy?: undefined;
        TravaNFTVeTravaCreateSale?: undefined;
        TravaNFTVeTravaCancelSale?: undefined;
        TravaNFTHeuristicFarmingPolish?: undefined;
        TravaNFTHeuristicFarmingWithdraw?: undefined;
        TravaNFTHeuristicFarmingClaimReward?: undefined;
        TravaNFTHeuristicFarmingStake?: undefined;
        USDCAddress?: undefined;
        USDTAddress?: undefined;
        DAIAddress?: undefined;
        ETHAddress?: undefined;
        XVSAddress?: undefined;
        DOTAddress?: undefined;
        AAVEAddress?: undefined;
        ADAAddress?: undefined;
        CAKEAddress?: undefined;
        XRPAddress?: undefined;
        DOGEAddress?: undefined;
    };
    listAddressesAllChains: {
        [x: number]: {
            GranarySupply: string;
            GranaryBorrow: string;
            GranaryRepay: string;
            GranaryWithdraw: string;
            RadiantSupply: string;
            RadiantBorrow: string;
            RadiantRepay: string;
            RadiantWithdraw: string;
            WePiggySupply: string;
            WePiggyBorrow: string;
            WePiggyRepay: string;
            WePiggyWithdraw: string;
            LiqeeSupply: string;
            LiqeeBorrow: string;
            LiqeeRepay: string;
            LiqeeWithdraw: string;
            CreamSupply: string;
            CreamBorrow: string;
            CreamRepay: string;
            CreamWithdraw: string;
            VenusWithdraw: string;
            VenusRepay: string;
            VenusBorrow: string;
            VenusSupply: string;
            TravaNFTExpeditionWithdraw: string;
            TravaNFTExpeditionDeploy: string;
            TravaNFTExpeditionAbandon: string;
            TravaNFTVeTravaBuy: string;
            TravaNFTVeTravaCreateSale: string;
            TravaNFTVeTravaCancelSale: string;
            TravaNFTHeuristicFarmingPolish: string;
            TravaNFTHeuristicFarmingWithdraw: string;
            TravaNFTHeuristicFarmingClaimReward: string;
            TravaNFTHeuristicFarmingStake: string;
            TravaAuctionCreateAuction: string;
            TravaAuctionMakeBid: string;
            RecipeExecutor: string;
            DFSProxyRegistry: string;
            TravaNFTTransfer: string;
            TravaNFTBuy: string;
            TravaNFTCreateSale: string;
            TravaNFTCancelSale: string;
            TravaNFTAuctionCancelAuction: string;
            TravaNFTAuctionCreateAuction: string;
            TravaNFTAuctionEditAuctionPrice: string;
            TravaNFTAuctionFinalizeAuction: string;
            TravaNFTAuctionMakeBid: string;
            PancakeSwapV2: string;
            PullToken: string;
            WrapBnb: string;
            UnwrapBnb: string;
            SendToken: string;
            SendTokenAndUnwrap: string;
            SendTokens: string;
            TravaSupply: string;
            TravaBorrow: string;
            TravaRepay: string;
            TravaWithdraw: string;
            TravaClaimRewards: string;
            TravaConvertRewards: string;
            TravaStakingStake: string;
            TravaStakingRedeem: string;
            TravaStakingClaimRewards: string;
            RouterAddress: string;
            FactoryAddress: string;
            WBNBAddress: string;
            USDCAddress: string;
            USDTAddress: string;
            DAIAddress: string;
            ETHAddress: string;
            XVSAddress: string;
            DOTAddress: string;
            AAVEAddress: string;
            ADAAddress: string;
            CAKEAddress: string;
            XRPAddress: string;
            DOGEAddress: string;
            TRAVAAddress: string;
            BUSDAddress: string;
            TODAddress: string;
            LiquidityCampaignBuyToken: string;
        } | {
            DFSProxyRegistry: string;
            RecipeExecutor: string;
            TravaAuctionCreateAuction: string;
            TravaAuctionMakeBid: string;
            TravaNFTTransfer: string;
            TravaNFTBuy: string;
            TravaNFTCreateSale: string;
            TravaNFTCancelSale: string;
            TravaNFTAuctionCancelAuction: string;
            TravaNFTAuctionCreateAuction: string;
            TravaNFTAuctionEditAuctionPrice: string;
            TravaNFTAuctionFinalizeAuction: string;
            TravaNFTAuctionMakeBid: string;
            PancakeSwapV2: string;
            PullToken: string;
            WrapBnb: string;
            UnwrapBnb: string;
            SendToken: string;
            SendTokenAndUnwrap: string;
            SendTokens: string;
            TravaSupply: string;
            TravaBorrow: string;
            TravaRepay: string;
            TravaWithdraw: string;
            TravaClaimRewards: string;
            TravaConvertRewards: string;
            TravaStakingStake: string;
            TravaStakingRedeem: string;
            TravaStakingClaimRewards: string;
            RouterAddress: string;
            FactoryAddress: string;
            TRAVAAddress: string;
            WBNBAddress: string;
            TODAddress: string;
            BUSDAddress: string;
            LiquidityCampaignBuyToken: string;
            GranarySupply?: undefined;
            GranaryBorrow?: undefined;
            GranaryRepay?: undefined;
            GranaryWithdraw?: undefined;
            RadiantSupply?: undefined;
            RadiantBorrow?: undefined;
            RadiantRepay?: undefined;
            RadiantWithdraw?: undefined;
            WePiggySupply?: undefined;
            WePiggyBorrow?: undefined;
            WePiggyRepay?: undefined;
            WePiggyWithdraw?: undefined;
            LiqeeSupply?: undefined;
            LiqeeBorrow?: undefined;
            LiqeeRepay?: undefined;
            LiqeeWithdraw?: undefined;
            CreamSupply?: undefined;
            CreamBorrow?: undefined;
            CreamRepay?: undefined;
            CreamWithdraw?: undefined;
            VenusWithdraw?: undefined;
            VenusRepay?: undefined;
            VenusBorrow?: undefined;
            VenusSupply?: undefined;
            TravaNFTExpeditionWithdraw?: undefined;
            TravaNFTExpeditionDeploy?: undefined;
            TravaNFTExpeditionAbandon?: undefined;
            TravaNFTVeTravaBuy?: undefined;
            TravaNFTVeTravaCreateSale?: undefined;
            TravaNFTVeTravaCancelSale?: undefined;
            TravaNFTHeuristicFarmingPolish?: undefined;
            TravaNFTHeuristicFarmingWithdraw?: undefined;
            TravaNFTHeuristicFarmingClaimReward?: undefined;
            TravaNFTHeuristicFarmingStake?: undefined;
            USDCAddress?: undefined;
            USDTAddress?: undefined;
            DAIAddress?: undefined;
            ETHAddress?: undefined;
            XVSAddress?: undefined;
            DOTAddress?: undefined;
            AAVEAddress?: undefined;
            ADAAddress?: undefined;
            CAKEAddress?: undefined;
            XRPAddress?: undefined;
            DOGEAddress?: undefined;
        };
    };
    getAddr: (name: string, chainId?: number) => string;
    SwapUtil: typeof SwapUtil;
};
export default _default;