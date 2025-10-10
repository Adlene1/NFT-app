import Moralis from "moralis";
import { MORALIS_API } from "../../config";

// Flag to prevent reinitialization
let moralisStarted = false;

export const loadCollections = async () => {
  try {
    // Start Moralis only once
    if (!moralisStarted && !Moralis.Core.isStarted) {
      await Moralis.start({
        apiKey: MORALIS_API,
      });
      moralisStarted = true;
    }

    // Fetch top NFT collections
    const response = await Moralis.EvmApi.marketData.getTopNFTCollectionsByMarketCap({});
    if (!response?.raw) {
      console.warn("No data returned from Moralis API");
      return [];
    }

    const top9 = response.raw.slice(0, 9);
    console.log("Top 9 NFT Collections:", top9);
    return top9;
  } catch (error) {
    console.error("Error loading NFT collections:", error);
    return [];
  }
};
