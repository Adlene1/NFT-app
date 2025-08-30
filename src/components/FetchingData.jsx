const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjgxYTI4OGFkLTFjMmQtNDZhNS1hNGFhLTQyNDM0OGNkOGQ0NCIsIm9yZ0lkIjoiNDU5NDY4IiwidXNlcklkIjoiNDcyNzA5IiwidHlwZUlkIjoiNTlhNjI3ZjUtZmJmZC00MmM4LWFjZTgtNDY0MWFiNDdhOWQzIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTI1ODczMTIsImV4cCI6NDkwODM0NzMxMn0.N6hrEX3jILYGnX6Yxe4EyK2BlpVURADWceE2J47Evys";
const BASE_URL = "https://deep-index.moralis.io/api/v2.2";

import Moralis from 'moralis';

const fetchingData = async ({ chain = "eth", limit = 10 }) => {
  // Correct endpoint for getting top NFT collections
  const url = `${BASE_URL}/nft/collections/top?chain=${chain}&limit=${limit}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        "X-API-Key": API_KEY,
        "accept": "application/json"
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData);
      throw new Error(`Failed to fetch collections: ${response.status}`);
    }

    const data = await response.json();
    console.log("Raw API response:", data);

    // Process the data according to the actual response structure
    const collections = data.result.map((c) => ({
      name: c.name || "Unnamed Collection",
      image: c.image || c.logo || "/default-nft.png",
      volume: c.volume?.usd || 0,
      change: c.volume_change_24h || 0,
      floorPrice: c.floor_price?.usd || 0
    }));

    console.log("Formatted collections:", collections);
    return collections;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export default fetchingData;