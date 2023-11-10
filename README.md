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
const trava_nft_heuristic_farming_withdraw = new actions.trava.TravaNFTHeurisiticFarmingWithdraw(
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
const trava_nft_heuristic_farming_polish = new actions.trava.TravaNFTHeurisiticFarmingPolish(
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
# TRAVA SIMULATION ROUTE
```
import { ApplicationState } from "../State/ApplicationState";

let appState = new ApplicationState(
    userAddress: String,
    smartWalletAddress: String,
    provider: JsonRpcProvider 
)
```
## Initialize state
### Các action liên quan đến token
Khi sử dụng đồng token nào, thì khởi tạo state về số dư của đồng token đó:
```
appState1 = await updateUserTokenBalance(
    appState,
    tokenAddress
)
```
Nếu sử dụng đồng BNB
```
appState2 = await updateUserEthBalance(
    appState1
)
```
# Approve token
## Approve ERCE20 token
### ABI contract ERC20 token
[
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "remaining",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "digits",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "supply",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

### Cách approve token
gọi hàm approve trong abi ERC20 token
tham số truyền vào là:
+ address token
+ lượng amount cần approve

## Approve Armory Contract
### ABI contract Armoury 
[
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_collectedExperience",
          "type": "uint256"
        }
      ],
      "name": "addExperience",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_collectedExperience",
          "type": "uint256"
        }
      ],
      "name": "addExperienceManager",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "tokenIds",
          "type": "uint256[]"
        }
      ],
      "name": "batchTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getExperience",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMaximumAllowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getRarity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getSet",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getType",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "isTokenOpened",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "specialTokenId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "data",
          "type": "string"
        }
      ],
      "name": "mintUniqueToken",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_collectionId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_seed",
          "type": "uint256"
        }
      ],
      "name": "openToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
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
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_collectionId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_targetType",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_targetRarity",
          "type": "uint256"
        }
      ],
      "name": "tradeUp",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

### Approve armoury
gọi function **approve** abi contract armoury với 2 tham số là:
+ address địa chỉ cần approve
+ token ID

## Approve Knight Contract
### ABI Knight Contract
[
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "collectionId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "accruedExperience",
          "type": "uint256"
        }
      ],
      "name": "addCollectionExperience",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "collectionId",
          "type": "uint256"
        }
      ],
      "name": "getCollectionExperience",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "collectionId",
          "type": "uint256"
        }
      ],
      "name": "getCollectionLevel",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
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
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "collectionId",
          "type": "uint256"
        }
      ],
      "name": "viewCollectionRarity",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

### Approve Knight
tương tự với approve armoury
## Approve token trong các Action
### Cách approve
+ Trừ đồng BNB, các đồng token khác cần approve
+ Contract gọi hàm **approve** trong abi là address ERC20 token
+ 2 tham số trong approve là:
    + tham số đầu tiên là address _to
    + tham số thứ 2 là amount đang dùng
### Các actions cần approve
PullToken, Supply, Repay, TransferArmoury, TransferCollection, TravaNFT Sell
