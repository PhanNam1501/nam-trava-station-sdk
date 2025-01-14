const path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/index.ts",
  target: "node",
  output: {
    library: "trava-station-sdk",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "umd"),
    filename: "index.js",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-typescript",
              [
                "@babel/preset-env",
                {
                  targets: {
                    esmodules: true,
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  externals: [
    "decimal.js",
    "web3-eth-abi",
    "web3-utils",
    "@zennomi/tokens",
    "@ethersproject/address",
    "@ethersproject/solidity",
    "@types/web3-eth-abi",
    "@types/web3",
    "axios",
    "ethers",
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
};