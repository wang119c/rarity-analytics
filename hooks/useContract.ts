import { useMemo } from "react";
import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import {
  ATTRIBUTES_CONTRACT,
  DAILYCARE_CONTRACT,
  DUNGEONS,
  GOLD_CONTRACTS,
  MULTIADVENTURE_CONTRACT,
  RARITY_CONTRACT,
} from "../constants";

import RARITY_ABI from "../constants/abis/rarity.json";
import GOLD_ABI from "../constants/abis/gold.json";
import ATTRIBUTES_ABI from "../constants/abis/attributes.json";
import MULTIADVENTURE_ABI from "../constants/abis/multiadventure.json";
import DAILYCARE_ABI from "../constants/abis/daycare.json";
import DUNGEON_ABI from "../constants/abis/dungeon.json";
import { getContract } from "../utils";
import { add } from "cheerio/lib/api/traversing";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

export function useContract(
  address: string | undefined,
  ABI: ethers.ContractInterface,
  withSignerIfPossible = true
): Contract | null {
  const { library, account } = useWeb3React<Web3Provider>();
  if (!address) return null;

  return useMemo(() => {
    if (!address || !ABI || !library) return null;
    try {
      return getContract(
        address,
        ABI,
        library,
        withSignerIfPossible && account ? account : undefined
      );
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [address, ABI, library, withSignerIfPossible]);
}

export function useRarityContract(): Contract | null {
  return useContract(RARITY_CONTRACT, RARITY_ABI);
}

export function useRarityGoldContract(): Contract | null {
  return useContract(GOLD_CONTRACTS, GOLD_ABI);
}

export function useRarityAttributesContract(): Contract | null {
  return useContract(ATTRIBUTES_CONTRACT, ATTRIBUTES_ABI);
}

export function useMultiAdventureContract(): Contract | null {
  return useContract(MULTIADVENTURE_CONTRACT, MULTIADVENTURE_ABI);
}

export function useDailyCareContract(): Contract | null {
  return useContract(DAILYCARE_CONTRACT, DAILYCARE_ABI);
}

export function useDungeonContract(): { [k: string]: Contract | null } {
  const { library } = useWeb3React<Web3Provider>();

  const dungeons: { [k: string]: Contract | null } = {};
  if (!library) return dungeons;
  const keys = Object.keys(DUNGEONS);
  for (const k of keys) {
    dungeons[k] = getContract(
      DUNGEONS[k].contract,
      DUNGEON_ABI,
      library,
      undefined
    );
  }
  return dungeons;
}
