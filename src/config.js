export const CONTRACT_ADDRESS = "0xBF995Dc2819A17D3B1FEC2eE70E03c736e2e4067";

export const CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: "contract FarmFactory",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "contract IUniFactory",
        name: "_uniswapFactory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_rewardToken",
        type: "address",
      },
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "contract IERC20", name: "_lpToken", type: "address" },
      { internalType: "uint256", name: "_blockReward", type: "uint256" },
      { internalType: "uint256", name: "_startBlock", type: "uint256" },
      { internalType: "uint256", name: "_bonusEndBlock", type: "uint256" },
      { internalType: "uint256", name: "_bonus", type: "uint256" },
    ],
    name: "createFarm",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "uint256", name: "_startBlock", type: "uint256" },
      { internalType: "uint256", name: "_bonusEndBlock", type: "uint256" },
      { internalType: "uint256", name: "_bonus", type: "uint256" },
      { internalType: "uint256", name: "_endBlock", type: "uint256" },
    ],
    name: "determineBlockReward",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "uint256", name: "_blockReward", type: "uint256" },
      { internalType: "uint256", name: "_startBlock", type: "uint256" },
      { internalType: "uint256", name: "_bonusEndBlock", type: "uint256" },
      { internalType: "uint256", name: "_bonus", type: "uint256" },
    ],
    name: "determineEndBlock",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      { internalType: "contract FarmFactory", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gFees",
    outputs: [
      { internalType: "contract IERCBurn", name: "gasToken", type: "address" },
      { internalType: "bool", name: "useGasToken", type: "bool" },
      { internalType: "uint256", name: "gasFee", type: "uint256" },
      { internalType: "uint256", name: "ethFee", type: "uint256" },
      { internalType: "uint256", name: "tokenFee", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address payable", name: "_devaddr", type: "address" },
    ],
    name: "setDev",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "setEthFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "setGasFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IERCBurn", name: "_gasToken", type: "address" },
    ],
    name: "setGasToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "_useGasToken", type: "bool" }],
    name: "setRequireGasToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "setTokenFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapFactory",
    outputs: [
      { internalType: "contract IUniFactory", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
];
