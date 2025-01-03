export const abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      { internalType: "bool", name: "isWstEth", type: "bool" },
    ],
    name: "query",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "decimals",
            type: "uint256",
          },
          { internalType: "bool", name: "hasSymbol", type: "bool" },
          { internalType: "string", name: "symbol", type: "string" },
          { internalType: "bool", name: "hasName", type: "bool" },
          { internalType: "string", name: "name", type: "string" },
          {
            internalType: "uint256",
            name: "stEthPerWstEth",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "bytes1",
                name: "fields",
                type: "bytes1",
              },
              { internalType: "string", name: "name", type: "string" },
              {
                internalType: "string",
                name: "version",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "verifyingContract",
                type: "address",
              },
              {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32",
              },
              {
                internalType: "uint256[]",
                name: "extensions",
                type: "uint256[]",
              },
            ],
            internalType: "struct Eip5267Domain",
            name: "eip5267Domain",
            type: "tuple",
          },
          {
            internalType: "bool",
            name: "hasEip5267Domain",
            type: "bool",
          },
        ],
        internalType: "struct TokenResponse",
        name: "res",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export const code =
  "0x60808060405234601557610635908161001a8239f35b5f80fdfe6080806040526004361015610012575f80fd5b5f3560e01c63287861f914610025575f80fd5b346103fb5760403660031901126103fb576004356001600160a01b03811691908290036103fb576024359182151583036103fb57610100820182811067ffffffffffffffff8211176103ff576040525f825260208201905f8252604083016060815260608401905f825260808501906060825260a08601945f865260c08701946040516100b181610542565b5f815260606020820152606060408201525f60608201525f60808201525f60a0820152606060c0820152865260e08801985f8a526040516306fdde0360e01b81525f81600481865afa5f9181610502575b506104f6575b506040516395d89b4160e01b81525f81600481865afa5f91816104d2575b506104c6575b5060405163313ce56760e01b8152602081600481865afa5f9181610488575b5061047d575b50610413575b5f600491604051928380926342580cb760e11b82525afa5f918161029b575b50916101ce959493916101b39361028f575b506040519860208a525160208a0152511515604089015251610100606089015261012088019061051e565b91511515608087015251858203601f190160a087015261051e565b915160c08401525192601f198383030160e084015260ff60f81b845116825260c061021d61020b602087015160e0602087015260e086019061051e565b6040870151858203604087015261051e565b946060810151606085015260018060a01b03608082015116608085015260a081015160a085015201519160c08186039101526020808351958681520192015f945b8086106102775750508293505115156101008301520390f35b9092602080600192865181520194019501949061025e565b60018b5287525f610188565b9091503d805f833e6102ad818361055e565b8101906020818303126103fb5780519067ffffffffffffffff82116103fb57019060e0828203126103fb57604051916102e583610542565b80516001600160f81b0319811681036103fb578352602081015167ffffffffffffffff81116103fb578261031a918301610580565b6020840152604081015167ffffffffffffffff81116103fb578261033f918301610580565b60408401526060818101519084015260808101516001600160a01b03811681036103fb57608084015260a081015160a084015260c08101519067ffffffffffffffff82116103fb57019080601f830112156103fb5781519167ffffffffffffffff83116103ff578260051b90604051936103bc602084018661055e565b84526020808501928201019283116103fb57602001905b8282106103eb5750505060c0820152906101b3610176565b81518152602091820191016103d3565b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6040516301afd7c160e11b8152602081600481855afa908115610472575f9161043f575b508752610157565b90506020813d60201161046a575b8161045a6020938361055e565b810103126103fb57516004610437565b3d915061044d565b6040513d5f823e3d90fd5b60ff1689525f610151565b9091506020813d6020116104be575b816104a46020938361055e565b810103126103fb575160ff811681036103fb57905f61014b565b3d9150610497565b6001845284525f61012c565b6104ef9192503d805f833e6104e7818361055e565b8101906105d6565b905f610126565b6001875285525f610108565b6105179192503d805f833e6104e7818361055e565b905f610102565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b60e0810190811067ffffffffffffffff8211176103ff57604052565b90601f8019910116810190811067ffffffffffffffff8211176103ff57604052565b81601f820112156103fb5780519067ffffffffffffffff82116103ff57604051926105b5601f8401601f19166020018561055e565b828452602083830101116103fb57815f9260208093018386015e8301015290565b906020828203126103fb57815167ffffffffffffffff81116103fb576105fc9201610580565b9056fea2646970667358221220389a149f2e0bd6ff1dee73cba200ac22d6611d304a114c8d87d33392f9d891a264736f6c634300081b0033";
