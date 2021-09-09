import {
  ExternalProvider,
  JsonRpcProvider,
  JsonRpcSigner,
  Web3Provider,
} from "@ethersproject/providers";
import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { getAddress } from "@ethersproject/address";
import { AddressZero } from "@ethersproject/constants";

export function isAddress(value: string): string | false {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
}

export function getSigner(
  library: Web3Provider,
  account: string
): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked();
}

export function getProviderOrSigner(
  library: Web3Provider,
  account?: string
): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library;
}

export function getLibrary(): JsonRpcProvider {
  const library = new JsonRpcProvider("https://rpcapi-tracing.fantom.network/");
  library.pollingInterval = 5000;
  return library;
}

export function getContract(
  address: string,
  ABI: ethers.ContractInterface,
  library: Web3Provider,
  account?: string
): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return new Contract(
    address,
    ABI,
    getProviderOrSigner(library, account) as any
  );
}
