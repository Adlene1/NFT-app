/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useState, useEffect } from "react";
import { openSea } from "./moralis/openSea";
const SectionHolder = styled.section`
  position: relative;
  height: 580px;
  width: 100%;
  //border: white solid 1px;
  padding: 0px 115px 0px 115px;
  @media (max-width: 1000px) {
    height: 1129px;
  }
  @media (max-width: 570px) {
    height: 2094px;
    .nft-header {
      left: 57px;
    }
  }
`;
const NftHeader = styled.h1`
  font-size: 96px;
  font-weight: 700;
  line-height: 80px;
  background: linear-gradient(to right, #0500fa, #e01e5a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  display: inline-block;
  z-index: -1;
  position: absolute;
  left: 205px;
`;
const ContentContainer = styled.section`
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  //border: 1px solid white;
  padding: 30px 115px 0px 115px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  h3 {
    font-size: 44px;
    font-weight: 500;
    width: 50%;
    height: fit-content;
    @media (max-width: 600px) {
      font-size: 31px;
    }
  }
  > div:nth-of-type(1) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    > div {
      display: flex;
      gap: 2px;
      align-items: flex-end;
      flex-wrap: wrap;

      button {
        background-color: transparent;
        height: 38px;
        outline: none;
        border: none;
        padding: 0px 16px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        border: white 1px solid;
        @media (max-width: 600px) {
          padding: 0px 11px;
          font-size: 11px;
        }
      }
    }
  }
`;
const CardsContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  //justify-content: space-between;
  // border: 1px solid white;
  gap: 5px;
  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Card = styled.div`
  width: 24%;
  height: 429px;
  background-color: #1e1b33;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  border-radius: 8px;
  @media (max-width: 1000px) {
    width: 280px;
  }

  > img {
    width: 100%;
    height: 210px;
  }
  > h4 {
    font-size: 21px;
    font-weight: 500;
  }
  p:nth-of-type(1) {
    color: #03db80;
    span {
      color: #03db80;
      opacity: 0.8;
    }
  }
  > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    img {
      margin-right: 5px;
    }
  }
  hr {
    width: 100%;
    height: 1px;
    border: none;
    background-color: #e7e7e773;
  }
  button:last-child {
    width: 105px;
    height: 38px;
    border: 0.5px #e7e7e766 solid;
    background-color: transparent;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    color: white;
    cursor: pointer;
  }
`;
const PopularSection = () => {
  const [collections, setCollections] = useState([]);
  const fourNfts = (res) => {
    const result = [];
    for (let i = 0; i < res.length; i++) {
      const nft = res[i];

      if (!nft.image_url) continue;

      const isWalletAddress = nft.name?.startsWith("0x");

      if (!isWalletAddress) {
        result.push(nft);
      }

      if (result.length === 4) break;
    }
    return result;
  };
  useEffect(() => {
    const fetchingData = async () => {
      const res = await openSea();
      const firstFour = fourNfts(res);
      setCollections(firstFour);
    };
    fetchingData();
  }, []);
  return (
    <SectionHolder id="section-container" className="componentHolder">
      <NftHeader className="nft-header">NFTs</NftHeader>
      <ContentContainer id="section-container">
        <div>
          <h3>Browse popular NFTs</h3>
          <div>
            <button>All NFT,s </button>
            <button>Art</button>
            <button>Games</button>
            <button>Sports</button>
            <button>Trending Cards</button>
          </div>
        </div>

        <CardsContainer>
          {collections.map((item, index) => (
            <Card key={index}>
              <img src={item.image_url || "/fallback.png"} alt={item.name} />
              <p>By {item.creator?.user?.username || "Unknown Creator"}</p>
              <h4>{item.name}</h4>
              <div>
                <p>
                  <img src="icons/ethShape.png" alt="" /> <span>From</span>{" "}
                  0.05 ETH
                </p>
                <p>
                  <img src="icons/heart.png" alt="" />
                  35
                </p>
              </div>
              <hr />
              <button>Place bid</button>
            </Card>
          ))}
        </CardsContainer>
      </ContentContainer>
    </SectionHolder>
  );
};
export default PopularSection;