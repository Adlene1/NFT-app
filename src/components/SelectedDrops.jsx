/* eslint-disable no-unused-vars */
import styled from "styled-components";
import fetchingData from "./FetchingData";
import { useEffect, useState } from "react";
import { loadCollections } from "./moralis/moralisService.js";
import { openSea } from "./moralis/openSea.js";

const SectionContainer = styled.div`
  width: 100%;
  height: 600px;
  //border: white solid 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media (max-width: 1230px) {
    height: 759px;
  }
  @media (max-width: 1000px) {
    height: 1305px;
    //height: fit-content;
  }
`;
const NftHeader = styled.h1`
  position: absolute;
  left: 115px;
  font-size: 96px;
  font-weight: 700;
  line-height: 80px;
  background: linear-gradient(to right, #0500fa, #e01e5a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  display: inline-block;
  z-index: -1;
`;
const ContentContainer = styled.section`
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  //border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const CollectionTimeHolder = styled.section`
  width: 100%;
  height: 100px;
  //border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 115px 0px 115px;
  @media (max-width: 1000px) {
    height: fit-content;
    button {
      width: 60px !important;
      padding: 0px 10px 0px 10px;
      font-size: 10px;
    }
    > div {
      flex-direction: column;
      display: flex;
      gap: 5px;
    }
  }
  button {
    width: 103px;
    height: 40px;
    border: 0.5px solid white;
  }
  h3 {
    font-size: 44px;
    font-weight: 500;
    @media (max-width: 500px) {
      font-size: 31px;
    }
  }
`;
const CardsContainer = styled.section`
  width: 100%;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 0px 115px 0px 115px;
  align-content: center;
  justify-content: center;
  gap: 20px;
`;
const CollectionsBtn = styled.button`
  width: 195px;
  min-height: 46px;
  outline: none;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(to right, #0500fa, #e01e5a);
`;
const Card = styled.div`
  width: 32%;
  height: 100px;
  padding: 7px;
  border: 1px solid #ffffff3d;
  border-radius: 8px;
  display: flex;
  align-items: center;
  background-color: #1e1b33;
  cursor: pointer;
  @media (max-width: 1200px) {
    width: 374px;
  }
  img {
    margin-right: 5px;
  }
  > img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 13px;
  }
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  > div:last-of-type {
    margin-left: auto;
  }
`;

const TopCollections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadCollections();
      setCollections(data);
    };
    fetchData();
  }, []);
  //
  useEffect(() => {
    //openSea()
  }, []);
  //fetchingData("eth", "7d");
  return (
    <SectionContainer className="componentHolder">
      <NftHeader>NFTs</NftHeader>
      <ContentContainer>
        <CollectionTimeHolder id="section-container">
          <h3>Top Collections</h3>
          <div>
            <button className="hoveredBtn">1 day</button>
            <button className="hoveredBtn">7 days</button>
            <button className="hoveredBtn">30 days</button>
          </div>
          <button className="hoveredBtn">Ethereum</button>
        </CollectionTimeHolder>
        <CardsContainer id="section-container">
          {collections.map((nft, index) => (
            <Card key={index}>
              <img src={nft.collection_image} />
              <div>
                <p>{nft.collection_title}</p>
                <span>
                  <img src="icons/greenShape.png" alt="green" />
                  {nft.floor_price_usd}
                </span>
              </div>
              <div>
                <span>{nft.volume_usd} USD</span>
                <span>{nft.floor_price_24hr_percent_change}</span>
              </div>
            </Card>
          ))}
        </CardsContainer>
        <CollectionsBtn>See All Collections</CollectionsBtn>
      </ContentContainer>
    </SectionContainer>
  );
};
export default TopCollections;