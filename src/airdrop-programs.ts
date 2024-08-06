import { Address, ChainId } from "@morpho-org/blue-rewards-core-sdk";

export type AirdropRewardProgramArgs = {
  claimDate: bigint;
  fundsSender: Address;
  urdAddress: Address;
  tokenAddress: Address;
  chainId: ChainId;
  ipfsHash: string;
};

/**
 * List of Airdrop programs
 * @example
 * [
 *   {
 *    claimDate: 1717149233n,
 *    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
 *    urdAddress: "0x330eefa8a787552dc5cad3c3ca644844b1e61ddb",
 *    tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
 *    ipfsHash: "QmUSNh34dpKFbX7YMU4fd5JbfkVYzb4e45o3pSqqXvzkKw",
 *    chainId: ChainId.MAINNET
 *   }
 * ]
 */
export const airdropPrograms: AirdropRewardProgramArgs[] = [
  // This program is for Development purposes only
  // DO NOT PUSH AIRDROP PROGRAMS TO PRODUCTION WITHOUT REMOVING IT
  {
    claimDate: 1717149233n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552dc5cad3c3ca644844b1e61ddb",
    tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    ipfsHash: "QmUSNh34dpKFbX7YMU4fd5JbfkVYzb4e45o3pSqqXvzkKw",
    chainId: ChainId.MAINNET,
  },
];
