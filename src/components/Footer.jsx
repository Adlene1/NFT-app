import styled from "styled-components";
import ColoredCircle from "./ColoredCircle";
const SectionHolder = styled.footer`
  width: 100%;
  height: 541px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
  @media (max-width: 968px) {
    height: 607px;
  }
`;
const ContentHolder = styled.div`
  display: flex;
  position: absolute;
  padding: 115px 115px 0px 115px;
  width: 100%;
  height: 100%;
  @media (max-width: 968px) {
    flex-wrap: wrap;
    padding-top: 0px;
    justify-content: space-between;
    align-content: flex-start;
  }
  h5 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 35px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: #ffffffc3;
    margin-bottom: 5px;
  }
  @media (max-width: 1064px) {
    h5 {
      font-size: 19px;
    }
    p {
      font-size: 13px;
    }
  }
`;

const FooterInnerDiv = styled.div`
  width: 23%;
  height: fit-content;
  @media (max-width: 968px) {
    width: 33%;
  }
  @media (max-width: 444px) {
    p{
      font-size: 11px;
    }
    h5{
      font-size: 16px;
    }
  }
`;
const FooterSection = ({ title, items }) => {
  return (
    <FooterInnerDiv>
      <h5>{title}</h5>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </FooterInnerDiv>
  );
};
const MarketPlaceHolder = styled.div`
  height: 255px;
  flex: 1;
  display: flex;
  flex-direction: column;
  /* padding-bottom: 179px; */
  justify-content: space-between;
  @media (max-width: 968px) {
    padding-top: 13px;
  }
  div:nth-of-type(1) {
    display: flex;
    height: 58px;
  }
  button {
    height: 58px;
    width: 131px;
    border-radius: 0px 8px 8px 0px;
  }
  input {
    width: 240px;
    height: 58px;
    background-color: #1e1b33;
    border: none;
    padding-left: 10px;
    border-radius: 8px 0px 0px 8px;
  }
  @media (max-width: 412px) {
     button{
      height: 50px;
      width: 111px;
    }
    input{
      width: 186px;
      height: 50px;
    }
  }
  div:nth-of-type(2) {
    display: flex;
      gap: 4px;
    img {
      width: 32px;
      height: 32px;
    }
  }
`;

const ReservedRights = styled.div`
  height: 80px;
  width: 100%;
  background-color: #1e1b33;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 115px;
  @media (max-width: 600px) {
    p{
      font-size: 11px;
    }
    >div{
      gap: 16px!important;
    }
  }
  > div {
    display: flex;
    gap: 30px;
  }
  > p {
    color: #c0c0c0;
  }
`;
const Footer = () => {
  return (
    <SectionHolder>
      <ColoredCircle $bottom="-150px" $right="-150px" />
      <ContentHolder id="section-container">
        <FooterSection
          title="Marketplace"
          items={[
            "Explore",
            "Help Center",
            "Become a Partner",
            "About Us",
            "Platform Status",
          ]}
        />
        <FooterSection
          title="Community"
          items={[
            "Profile",
            "Favorites ",
            "WatchList",
            "My Collections",
            "Rankings",
            "Activity",
          ]}
        />
        <FooterSection
          title="Categories"
          items={[
            "Arts",
            " Collectibles",
            "Games",
            "Sports",
            "Trading Cards",
            "Photography",
          ]}
        />
        <MarketPlaceHolder>
          <h5>Marketplace</h5>
          <p>
            If you’re an NFT enthusiast or are looking to download our NFT App.
          </p>
          <div>
            <input type="email" placeholder="Type Your Email" />
            <button className="cardsBtns">Subscribe</button>
          </div>
          <div>
            <img src="icons/Facebook.png" alt="" />
            <img src="icons/Twitter.png" alt="" />
            <img src="icons/insta.png" alt="" />
            <img src="icons/LinkedIn.png" alt="" />
          </div>
        </MarketPlaceHolder>
      </ContentHolder>
      <ReservedRights id="section-container">
        <div>
          <p>Privacy Policy</p>
          <p>License</p>
          <p>API</p>
        </div>
        <p>@ 2021 All rights reserved</p>
      </ReservedRights>
    </SectionHolder>
  );
};
export default Footer;