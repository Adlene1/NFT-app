import styled from "styled-components";
import ColoredCircle from "./ColoredCircle";
import { useState, useEffect } from "react";
import { notableDrops } from "./moralis/openSea";

const SectionHolder = styled.div`
  display: flex;
  margin-top: 107px;
  position: relative;
  height: 579px;
  width: 100%;
  padding: 0px 115px 0px 115px;
  //border: 1px white solid;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
@media (max-width: 1000px) {
  height: fit-content;
}
`;
const NftHeader = styled.h1`
  font-size: 96px;
  font-style: bold;
  font-weight: 700;
  line-height: 80px;
  letter-spacing: -1.4%;
  background: linear-gradient(to right, #0500fa, #e01e5a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  display: inline-block;
`;
const ContentContainer = styled.section`
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  //border: 1px solid white;
  pointer-events: none;
  padding-top: 27px;
  h2 {
    font-size: 44px;
    font-weight: 500;
    line-height: 48px;
    @media (max-width: 500px) {
      font-size: 31px;
    }
  }
`;
const CardHolder = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
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
  height: 100%;
  background-color: #1e1b33;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    width: 288px;
    height: 499px;
  }
  @media (max-width: 600px) {
    width: 264px;
    height: 491px;
    p {
      font-size: 14px;
    }
  }
  @media (max-width: 570px) {
    width: 288px;
    height: 499px;
    p {
      font-size: 14px;
    }
  }
  @media (max-width: 570px) {
    h3{
      font-size: 24px!important;
    }
    p{
      font-size: 16px!important;
    }
  }

  > img {
    width: 100%;
    height: 232px;
  }
  > div {
    display: flex;
    justify-content: space-between;
  }
  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 0%;
    @media (max-width: 600px) {
      font-size: 21px;
    }
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
  > div > section:nth-of-type(1) {
    align-items: flex-start;
  }
  button {
    width: 100%;
    height: 38px;
    border-radius: 8px;
    outline: none;
    border: 0.5px solid #ffffff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    background: linear-gradient(to right, #0500fa, #e01e5a);
    background-size: 0% 100%;
    background-repeat: no-repeat;
    transition: background-size 0.3s ease;
  }
  button:hover {
    background-size: 100% 100%;
  }
`;
const SelectedDrops = () => {
  const [drops, setDrops] = useState([]);

  const fourNfts = (res) => {
    const result = [];
    for (let i = 0; i < res.length; i++) {
      const asset = res[i]?.asset;
      if (!asset) continue;

      if (asset.display_image_url && asset.name && asset.name.length < 30) {
        result.push(asset);
      }
      if (result.length === 4) break;
    }
    return result;
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await notableDrops();
      const firstFour = fourNfts(result);
      console.log("events:", firstFour);
      setDrops(firstFour);
    };
    fetchData();
  }, []);
  return (
    <SectionHolder id="section-container" className="componentHolder">
      <NftHeader>NFTs</NftHeader>
      <ColoredCircle $top="103px" $right="182px" />
      <ContentContainer>
        <h2>Selected notable drops</h2>
      </ContentContainer>
      <CardHolder>
        {drops.map((drop, index) => (
          <Card key={index}>
            {drop.display_animation_url ? (
              <video
                src={drop.display_animation_url}
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            ) : (
              <img
                src={drop.display_image_url || "/cardPic.png"}
                alt={drop.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            )}
            <div>
              <section>
                <h3>{drop.name || "Untitled Drop"}</h3>
                <p>
                  <img src="/icons/greenShape.png" alt="" />
                  From {drop.floor_price ?? "N/A"} Flow
                </p>
              </section>
              <section>
                <span>
                  <img src="/heart.png" alt="" />
                  {drop.likes || 10}
                </span>
                <img src="/Group.png" alt="" />
              </section>
            </div>
            <button>Live now</button>
          </Card>
        ))}
      </CardHolder>
    </SectionHolder>
  );
};
export default SelectedDrops;
