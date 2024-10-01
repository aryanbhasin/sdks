import { VaultMarketConfig } from "@morpho-org/blue-sdk";
import {
  FetchParameters,
  fetchVaultMarketConfig,
} from "@morpho-org/blue-sdk-viem";
import type { QueryOptions } from "@tanstack/query-core";
import type { ReadContractErrorType } from "viem";
import { Config } from "wagmi";
import { MarketParameters } from "./fetchMarket";
import { VaultParameters } from "./fetchVault";

export type VaultMarketConfigParameters = VaultParameters & MarketParameters;

export type FetchVaultMarketConfigParameters =
  Partial<VaultMarketConfigParameters> & FetchParameters;

export function fetchVaultMarketConfigQueryOptions<config extends Config>(
  config: config,
  parameters: FetchVaultMarketConfigParameters,
) {
  return {
    // TODO: Support `signal` once Viem actions allow passthrough
    // https://tkdodo.eu/blog/why-you-want-react-query#bonus-cancellation
    async queryFn({ queryKey }) {
      const { vault, marketId, chainId, ...parameters } = queryKey[1];
      if (!vault) throw Error("vault is required");
      if (!marketId) throw Error("marketId is required");

      return fetchVaultMarketConfig(
        vault,
        marketId,
        config.getClient({ chainId }),
        {
          chainId,
          ...parameters,
        },
      );
    },
    queryKey: fetchVaultMarketConfigQueryKey(parameters),
  } as const satisfies QueryOptions<
    VaultMarketConfig,
    ReadContractErrorType,
    VaultMarketConfig,
    FetchVaultMarketConfigQueryKey
  >;
}

export function fetchVaultMarketConfigQueryKey({
  vault,
  marketId,
  chainId,
  blockTag,
  blockNumber,
  account,
  stateOverride,
}: FetchVaultMarketConfigParameters) {
  return [
    "fetchVaultMarketConfig",
    // Ignore all other irrelevant parameters.
    {
      vault,
      marketId,
      chainId,
      blockTag,
      blockNumber,
      account,
      stateOverride,
    } as FetchVaultMarketConfigParameters,
  ] as const;
}

export type FetchVaultMarketConfigQueryKey = ReturnType<
  typeof fetchVaultMarketConfigQueryKey
>;
