export enum ChainId {
  MAINNET = 250,
}

export const RARITY_CONTRACT = "0xce761d788df608bd21bdd59d6f4b54b2e27f25bb";

export const GOLD_CONTRACTS = "0x2069B76Afe6b734Fb65D1d099E7ec64ee9CC76B2";

export const ATTRIBUTES_CONTRACT = "0xB5F5AF1087A8DA62A23b08C00C6ec9af21F397a1";

export const MULTIADVENTURE_CONTRACT =
  "0x0D4C98901563ca730332e841EDBCB801fe9F2551";

export const DAILYCARE_CONTRACT = "0xf1bf34E46ECf465591B7a7fA9635E4C583174fa3";

export const DUNGEONS: { [k: string]: { name: string; contract: string } } = {
  cellar: {
    name: "The Cellar",
    contract: "0x2A0F1cB17680161cF255348dDFDeE94ea8Ca196A",
  },
};
