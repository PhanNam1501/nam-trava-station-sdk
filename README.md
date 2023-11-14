# Table of contents
- [Table of contents](#table-of-contents)
- [TRAVA STATION SDK](#trava-station-sdk)
  - [Utilities](#utilities)
    - [Pull token](#pull-token)
    - [Send token](#send-token)
    - [Wrap token](#wrap-token)
    - [Unwrap token](#unwrap-token)
    - [Swap](#swap)
  - [Trava Pools](#trava-pools)
    - [Deposit](#deposit)
    - [Borrow](#borrow)
    - [Repay](#repay)
    - [Withdraw](#withdraw)
    - [claimRewards](#claimrewards)
    - [convertRewards](#convertrewards)
  - [Trava Staking](#trava-staking)
    - [Stake](#stake)
    - [Redeem (Withdraw)](#redeem-withdraw)
    - [Claim](#claim)
  - [Trava NFT Marketplace / Sell](#trava-nft-marketplace--sell)
    - [Buy](#buy)
    - [Create Sale](#create-sale)
    - [Cancel sale](#cancel-sale)
  - [Trava NFT Marketplace / Auction](#trava-nft-marketplace--auction)
    - [Create Auction](#create-auction)
    - [Cancel Auction](#cancel-auction)
    - [Make bid Auction](#make-bid-auction)
    - [Edit Auction Price](#edit-auction-price)
    - [Finalize Auction](#finalize-auction)
  - [Trava NFT Utilites](#trava-nft-utilites)
    - [Transfer armoury](#transfer-armoury)
    - [Transfer Collection](#transfer-collection)
  - [Execute actions](#execute-actions)
  - [ABI IDSProxy Contract](#abi-idsproxy-contract)
- [TRAVA SIMULATION ROUTE](#trava-simulation-route)
  - [Initialize state](#initialize-state)
    - [Các action liên quan đến token](#các-action-liên-quan-đến-token)
- [Approve token](#approve-token)
  - [Approve ERCE20 token](#approve-erce20-token)
    - [ABI contract ERC20 token](#abi-contract-erc20-token)
    - [Cách approve token](#cách-approve-token)
  - [Approve Armory Contract](#approve-armory-contract)
    - [ABI contract Armoury](#abi-contract-armoury)
    - [Approve armoury](#approve-armoury)
  - [Approve Knight Contract](#approve-knight-contract)
    - [ABI Knight Contract](#abi-knight-contract)
    - [Approve Knight](#approve-knight)
  - [Approve token trong các Action](#approve-token-trong-các-action)
    - [Cách approve](#cách-approve)
    - [Các actions cần approve](#các-actions-cần-approve)
# TRAVA STATION SDK
```
import {actions} from "trava-station-sdk"
```
Với các actions:
## Utilities
### Pull token
```
const pull_token_action = new actions.basic.PullTokenAction(
    token: String,
    from: String,
    amount: uint256
)
```
### Send token
```
const send_token_action = new actions.basic.SendTokenAction(
    token: String,
    to: String,
    amount: uint256
)
```
### Wrap token
```
const pull_token_action = new actions.basic.PullTokenAction()
const wrap_token_action = new actions.basic.WrapBnbAction(
    amount: uint256
)
```
### Unwrap token
```
const unwrap_token_action = new actions.basic.UnwrapBnbAction(
    amount: uin256,
    to: String
)
```
### Swap
```
const swapUtil = new SwapUtil(web3);
const info = new await swapUtil.getInformationFromInput(tokenAddr1, tokenAddr2, slipparage, amount);
const minimumReceive = info.minimumReceive
const priceImpact = info.priceImpact;
const path = info.path;
```
```
const swap_token_action = new actions.pancakeswap.PancakeSwapV2(
    amountIn: uint256,
    amountOutMin: 0,
    path: path,
    to: _to address,
    deadline: timestamp + 30 * 60 * 1000
    from: _from address
)
```
## Trava Pools
### Deposit
```
const trava_supply_action = new actions.trava.TravaSupply(
    market: address of lending pool,
    token: address of token selected,
    amount: uint256,
    to: _from address,
    onBehalfOf: address of proxy,
    enableAsColl: true
)
```
### Borrow
```
const trava_borrow_action = new actions.trava.TravaBorrow(
    market,
    token,
    amount,
    to: _to_ address,
    onBehalfOf: proxy
)
```
### Repay
```
const trava_repay_action = new actions.trava.TravaRepay(
    market,
    token,
    amount,
    from,
    onBehalfOf: proxy
)
```
### Withdraw
```
const trava_withdraw_action = new actions.trava.TravaWithdraw(
    market,
    token,
    amount,
    to
)
```
### claimRewards
```
asset = await getListTDTokenRewardsAddress(appState);
amount = MAX_UINT256;
```

```
const trava_withdraw_action = new actions.trava.TravaClaimRewards(
    asset,
    amount,
    to,
    contractAddress
)
```
### convertRewards
```
amount = MAX_UINT256;
```
```
const trava_withdraw_action = new actions.trava.TravaConvertRewards(
    from,
    amount,
    to,
    contractAddress
)

```
## Trava Staking
### Stake
```
const trava_staking_stake_action = new actions.trava.TravaStakingStake(
  stakingPoolAddress,
  smartWalletAddress,
  amount,
  contractAddress
)
```
### Redeem (Withdraw)
```
const trava_staking_redeem_action = new actions.trava.TravaStakingRedeem(
  stakingPoolAddress,
  to,
  amount,
  contractAddress
)
```
### Claim
```
const trava_staking_claim_action = new actions.trava.TravaStakingClaimRewards(
  stakingPoolAddress,
  to,
  MAX_UINT256,
  contractAddress
)
```
## Trava NFT Marketplace / Sell
### Buy
```
const trava_nft_buy_action = new actions.trava.TravaNFTBuy(
    tokenId,
    price,
    from, 
    to
)
```
### Create Sale
```
const trava_nft_create_sale_action = new actions.trava.TravaNFTCreateSale(
    tokenId,
    to
)
```
### Cancel sale
```
const trava_nft_cancel_sale_action = new actions.trava.TravaNFTCancelSale(
    tokenId,
    to
)
```

## Trava NFT Marketplace / Auction
### Create Auction
```
const trava_nft_auction_create_action = new actions.trava.TravaNFTAuctionCreateAuction(
    tokenId,
    startingBid,
    duration (s), 
    ceilingPrice,
    method
)
```
### Cancel Auction
```
const trava_nft_auction_cancel_action = new actions.trava.TravaNFTAuctionCancelAuction(
    tokenId,
    to
)
```
### Make bid Auction
```
const trava_nft_auction_make_bid = new actions.trava.TravaNFTAuctionMakeBid(
    tokenId,
    bidPrice, 
    from
)
```
### Edit Auction Price
```
const trava_nft_auction_eidt_action_price = new actions.trava.TravaNFTAuctionEditAuctionPrice(
    tokenId,
    startingBid
)
```
### Finalize Auction
```
const trava_nft_auction_finalize_action = new actions.trava.TravaNFTAuctionFinalizeAuction(
    tokenId,
    to
)
```

## Trava NFT Mission / Heuristic Farming
### Trava heuristic farming stake
```
const trava_nft_heuristic_farming_stake = new actions.trava.TravaNFTHeuristicFarmingStake(
    heuristic farming address,
    array<collection_id>,
    level,
    fromAddress,
    contractAddress
)
```
### Trava heuristic farming withdraw
```
const trava_nft_heuristic_farming_withdraw = new actions.trava.TravaNFTheuristicFarmingWithdraw(
    heuristic farming address,
    array<collection_id>,
    level,
    toAddress,
    contractAddress
)
```
### Trava heuristic farming claim reward
```
const trava_nft_heuristic_farming_claimRewards = new actions.trava.TravaNFTHeuristicFarmingClaimReward(
    heuristic farming address,
    array<collection_id>,
    level,
    contractAddress
)
```
### Trava heuristic farming polish
```
const trava_nft_heuristic_farming_polish = new actions.trava.TravaNFTheuristicFarmingPolish(
    heuristic farming address,
    array<collection_id>,
    level,
    contractAddress
)
```
## Trava NFT Utilites
### Transfer armoury
```
const trava_nft_transfer_armoury_action = new actions.trava.TravaNFTTransfer(
    from,
    to, 
    tokenId,
    nftCore: address of TravaNFTCore
)
```
### Transfer Collection
```
const trava_nft_transfer_Collection_action = new actions.trava.TravaNFTTransfer(
    from,
    to, 
    tokenId,
    nftCore: address of TravaNFT Collection
)
```

## Execute actions
Sau khi có được các action xong, để execute Freight
giả sử kết hợp action supply và borrow, repay và withdraw
```
import {Recipe} from "trava-station-sdk";

const recipe = new Recipe(
    "ten action = address user + timestamp",
    [
        trava_supply_action,
        trava_borrow_action,
        trava_repay_action,
        trava_withdraw_action
    ]
)

const encoded = recipe.encodeForDsProxyCall();

sau đó dùng contract Proxy để execute (abi e để dưới), address của contract này là proxy của người dùng

await proxyContract.execute(encoded[0], encoded[1])
```

## ABI IDSProxy Contract
```
[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_target",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "execute",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_cacheAddr",
          "type": "address"
        }
      ],
      "name": "setCache",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    }
  ]
```