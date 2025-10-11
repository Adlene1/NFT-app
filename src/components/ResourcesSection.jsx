import styled from "styled-components";
import ColoredCircle from "./ColoredCircle";
const SectionHolder = styled.section`
  position: relative;
  height: 650px;
  width: 100%;
  //border: white solid 1px;
  padding: 0px 115px 0px 115px;
  @media (max-width: 1100px) {
    height: 1116px;
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
`;
const ContentContainer = styled.section`
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  //border: 1px solid white;
  padding: 0px 115px 0px 115px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: 44px;
    font-weight: 500;
  }
`;
const CardsContainer = styled.div`
  flex: 1;
  width: 100%;
  //border: #ffffff71 solid 1px;
  display: flex;
  gap: 20px;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
  > div {
    width: 49%;
    position: relative;
    @media (max-width: 1100px) {
      width: 100%;
    }
  }
  > div:nth-of-type(1) {
    position: relative;

    > img {
      width: 100%;
      height: 88%;
    }
  }
  > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
  }
`;
const FirstCard = styled.div`
  width: 96%;
  height: 210px;
  z-index: 1;
  position: absolute;
  bottom: 0px;
  left: 17px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #1e1b33;
  border-radius: 8px;
  @media (max-width: 1200px) {
    & h4 {
      font-size: 19px !important;
    }
    & p {
      font-size: 13px !important;
    }
  }

  > div {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  button {
    width: 114px;
    height: 30px;
    border: 0.5px solid #ffffffa9;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    background: linear-gradient(to right, #0500fa, #e01e5a);
    border-radius: 8px;
    margin-right: 5px;
  }
  img {
    margin-right: 5px;
  }
  span {
    opacity: 0.6;
  }
  h4 {
    font-size: 23px;
    font-weight: 500;
  }
`;
const SecondCard = styled.div`
  width: 96%;
  height: 210px;
  z-index: 1;
  padding: 32px;
  display: flex;

  justify-content: space-between;
  background-color: #1e1b33;
  border-radius: 8px;
  @media (max-width: 500px) {
    padding: 11px;
  }
  > img {
    width: 152px;
    height: 152px;
    margin-right: 5px;
    @media (max-width: 500px) {
      width: 112px;
      height: 109px;
      margin-right: 5px;
      align-self: center;
    }
  }
`;
const CardInfoHolder = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1200px) {
    h4 {
      font-size: 19px !important;
    }
    p {
      font-size: 13px !important;
    }
    @media (max-width: 500px) {
      button{
        width: 60px;
      }
    }
  }
  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  button:nth-of-type(1) {
    width: 87px;
    
  }
  button:nth-of-type(2) {
    width: 75px;
  }
  h4 {
    font-size: 23px;
    font-weight: 500;
  }
  img {
    margin-right: 5px;
  }
  span {
    opacity: 0.6;
  }
`;
const ResourcesSection = () => {
  return (
    <SectionHolder id="section-container" className="componentHolder">
      <NftHeader>NFTs</NftHeader>
      <ColoredCircle />
      <ContentContainer id="section-container">
        <h3>Resources for getting started</h3>
        <CardsContainer>
          <div>
            <img src="giant.png" alt="" />
            <FirstCard>
              <div>
                <button>NFT Token</button>
                <p>
                  <img src="icons/ant-design_comment-outlined.png" alt="" />
                  No Comment
                </p>
              </div>
              <h4>The Seven Secrets I should have received NFTs. </h4>
              <div>
                <img src="profile1.png" alt="" />
                <p>
                  Election Season <br />
                  <span>June 2, 2022</span>
                </p>
              </div>
            </FirstCard>
          </div>
          <div>
            <SecondCard>
              <img src="bg1.png" alt="" />
              <CardInfoHolder>
                <div>
                  <button className="cardsBtns">Game</button>
                  <button className="cardsBtns">NFT</button>
                  <p>
                    <img src="icons/ant-design_comment-outlined.png" alt="" />
                    No Comment
                  </p>
                </div>
                <h4>I think I minted duplicate NFTs</h4>
                <div>
                  <img src="profile2.png" alt="" />
                  <p>
                    Courtney Henry <br />
                    <span>May 27, 2022</span>
                  </p>
                </div>
              </CardInfoHolder>
            </SecondCard>
            <SecondCard>
              <img src="bg1.png" alt="" />
              <CardInfoHolder>
                <div>
                  <button className="cardsBtns">Game</button>
                  <button className="cardsBtns">NFT</button>
                  <p>
                    <img src="icons/ant-design_comment-outlined.png" alt="" />
                    No Comment
                  </p>
                </div>
                <h4>The Marketplace isn’t working</h4>
                <div>
                  <img src="jackSmith.png" alt="" />
                  <p>
                    Courtney Henry <br />
                    <span>May 27, 2022</span>
                  </p>
                </div>
              </CardInfoHolder>
            </SecondCard>
          </div>
        </CardsContainer>
      </ContentContainer>
    </SectionHolder>
  );
};
export default ResourcesSection;