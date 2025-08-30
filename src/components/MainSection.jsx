import { useState, useEffect } from "react";
import styled from "styled-components";
import ColoredCircle from "./ColoredCircle";
const SectionContainer = styled.section`
  width: 100%;
  height: 826px;
  padding: 0px 115px 0px 115px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1410px) {
    h1 {
      font-size: 54px !important;
    }
  }
  @media (max-width: 1000px) {
    height: 575px;
  }
  @media (max-width: 600px) {
    height: 499px;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  height: 674px;
  display: flex;
  @media (max-width: 1400px) {
    justify-content: space-between;
  }
`;
const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;

  padding-top: 131px;
  @media (max-width: 1300px) {
    padding-top: 71px;
  }
  @media (max-width: 1200px) {
    padding-top: 0px;
  }
`;
const TextContainer = styled.section`
  width: 100%;
  height: fit-content;
  @media (max-width: 1410px) {
    h1 {
      font-size: 54px !important;
    }
  }
  @media (max-width: 1200px) {
    h1 {
      font-size: 41px !important;
      margin-bottom: 20px;
    }
    p {
      font-size: 21px !important;
      max-width: 433px;
    }
    @media (max-width: 1000px) {
      h1 {
        font-size: 27px !important;
        line-height: 37px !important;
      }
      p {
        font-size: 16px !important;
      }
    }
  }
  h1 {
    font-size: 64px;
    font-weight: 700;
    line-height: 80px;
  }
  span {
    background: linear-gradient(to right, #0500fa, #e01e5a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-size: 24px;
    font-weight: 300;
    font-style: light;
    letter-spacing: 0%;
    line-height: 156%;
    max-width: 572px;
    margin-bottom: 43px;
  }
`;
const BtnsContainer = styled.div`
  width: 245px;
  height: 44px;
  display: flex;
  justify-content: space-between;

  font-size: 16px;
  font-weight: 300;
  font-style: Medium;
  letter-spacing: 0%;
  line-height: 20px;
  border: none;
  outline: none;
  margin-bottom: 43px;

  button {
    border-radius: 8px;
    height: 100%;
  }
`;
const ExploreBtn = styled.button`
  width: 119px;
  background: linear-gradient(to right, #0500fa, #e01e5a);

  border: none;
  outline: none;
`;
const CreateBtn = styled.button`
  width: 114px;
  background-color: #1e1b33;

  border: #e7e7e766 1px solid;
`;
const LearnMoreContainer = styled.div`
  width: 215px;
  height: fit-content;
  align-items: center;
  gap: 8px;
  display: flex;
  img {
    width: 32px;
    height: 32px;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0%;
  }
`;
const ImageHolder = styled.div`
  border-radius: 50%;
  border: 1px #7040f2 solid;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  @media (max-width: 1400px) {
    &.big-circle {
      left: 584.99px;
    }
    &.small-circle {
      left: 428px;
    }
  }
  @media (max-width: 1300px) {
    &.big-circle {
      left: 459px;
    }
    &.small-circle {
      left: 357px;
    }
  }
  @media (max-width: 1100px) {
    &.big-circle {
      left: 403px;
    }
    &.small-circle {
      left: 316px;
    }
  }
  @media (max-width: 1000px) {
    &.big-circle {
      width: 120px;
      height: 120px;
      left: 381px;
      top: 292.53px;
    }
    &.small-circle {
      left: 292px;
      top: 408.53px;
    }
  }
  @media (max-width: 800px) {
    &.big-circle {
      width: 120px;
      height: 120px;
      left: 334px;
      top: 292.53px;
    }
    &.small-circle {
      left: 252px;
      top: 408.53px;
    }
  }
  @media (max-width: 700px) {
    &.big-circle {
      width: 108px;
      height: 108px;
      left: 264px;
      top: 292.53px;
    }
    &.small-circle {
      left: 252px;
      top: 408.53px;
      width: 86px;
      height: 86px;
    }
  }
  @media (max-width: 600px) {
    &.big-circle {
      display: none;
    }
    &.small-circle {
      display: none;
    }
  }
  img {
    width: 90%;
    height: 90%;
    border-radius: 50%;
    object-fit: cover;
    top: 50%;
    left: 50%;
    z-index: 1;
    animation: fadeIn 0.5s ease forwards;
  }
  svg {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const DashedSVG = styled.svg`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;
const DashedCircle = () => (
  <DashedSVG viewBox="0 0 210 210">
    <circle
      cx="105"
      cy="105"
      r="100"
      fill="none"
      stroke="#7040F2"
      strokeWidth="2"
      strokeDasharray="8 4" // dash length = 8px, gap = 4px
    />
  </DashedSVG>
);
const DotsContainer = styled.div`
  height: 8px;
  width: 83px;
  position: absolute;
  top: 741px;
  left: 726px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  @media (max-width: 1400px) {
    left: 653px;
  }
  @media (max-width: 1277px) {
    left: 539px;
  }
  @media (max-width: 1000px) {
    top: 527px;
    left: 349px;
  }
  @media (max-width: 600px) {
    display: none;
  }

  button {
    width: 16px;
    height: 8px;
    border-radius: 100px;
    background-color: #d9d9d9;
    outline: none;
    border: none;
    transition: all 0.3s ease;
  }
  .activeBtn {
    width: 41px;
    background: linear-gradient(to right, #0500fa, #e01e5a);
    transition: all 0.3s ease;
  }
`;
const MainImageContainer = styled.div`
  width: 40%;
  height: 100%;

  @media (max-width: 1100px) {
    height: 539px;
  }
  @media (max-width: 1000px) {
    width: 31%;
    height: 411px;
  }
  @media (max-width: 700px) {
    width: 205px;
    height: 257px;
  }
  @media (max-width: 600px) {
    //display: none;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    animation: fadeIn 0.5s ease forwards;
  }
`;
const ArrowHolder = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 50%;
  background-color: #05021d;
  position: absolute;
  top: 358px;
  right: 551px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1382px) {
    right: 521px !important;
  }
  @media (max-width: 1300px) {
    right: 485px !important;
  }
  @media (max-width: 1200px) {
    right: 434px !important;
  }
  @media (max-width: 1100px) {
    right: 400px !important;
  }
  @media (max-width: 1000px) {
    width: 50px;
    height: 50px;
    right: 312px !important;
    top: 257px;
  }
  @media (max-width: 886px) {
    right: 283px !important;
  }
  @media (max-width: 800px) {
    right: 238px !important;
  }
  @media (max-width: 700px) {
    right: 187px !important;
    top: 184px;
  }
  @media (max-width: 600px) {
    display: none;
  }

  img {
    width: 48px;
    height: 35px;
    @media (max-width: 1000px) {
      width: 34px;
      height: 23px;
    }
  }
`;
const StatisticsHolder = styled.section`
  width: 100%;
  height: 76px;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #e7e7e73d;
  @media (max-width: 1128px) {
    p {
      max-width: 255px !important;
      font-size: 12px;
    }
    h3 {
      font-size: 28px !important;
    }
  }
  @media (max-width: 900px) {
    p {
      max-width: 255px !important;
      font-size: 11px;
    }
    h3 {
      font-size: 23px !important;
    }
  }
  @media (max-width: 600px) {
    height: 200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
    > p {
      /*max-width: 100% !important;
      height: fit-content;*/
      grid-column: 1 / -1; /* span full width */
    }
    > div {
      /*width: 50%;
      display: inline-block;
      margin-bottom: 12px;*/
    }
  }
  p {
    max-width: 387px;
  }

  h3 {
    font-size: 36px;
    color: #7040f2;
  }
  > div:nth-of-type(1) h3 {
    background: linear-gradient(to right, #0500fa, #e01e5a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const MainSection = () => {
  const images = ["/mainImage.png", "/secondImage.jpg", "firstImage.jpg"];
  const statistics = [
    { number: 30000, text: "World Arts" },
    { number: 18000, text: "Digital Artists" },
    { number: 22000, text: "Live Auctions" },
    { number: 50000, text: "Unique Products" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentSlide, images.length]);

  const getImage = (offset) =>
    images[(currentSlide + offset + images.length) % images.length];

  return (
    <SectionContainer id="section-container">
      <ColoredCircle />
      <SliderContainer>
        <HeroSection>
          <TextContainer>
            <h1>
              Discover, collect, and sell extraordinary <span>NFTs</span>
            </h1>
            <p>
              Our marketplace is the world’s first and largest NFT market for
              independent creators worldwide{" "}
            </p>
          </TextContainer>
          <BtnsContainer>
            <ExploreBtn>Explore</ExploreBtn>
            <CreateBtn>Create</CreateBtn>
          </BtnsContainer>
          <LearnMoreContainer>
            <img src="/icons/learnmore.png"></img>
            <p>Learn more about Nftico</p>
          </LearnMoreContainer>
          <ImageHolder
            className="small-circle"
            $width="86px"
            $height="86px"
            $top="521.84px"
            $left="522px"
          >
            <DashedCircle $width="74.5px" $height="74.5px"></DashedCircle>
            <img src={getImage(-1)} alt="circle 1" />
          </ImageHolder>
          <ImageHolder
            className="big-circle"
            $width="156px"
            $height="156px"
            $top="407.53px"
            $left="639.99px"
          >
            <DashedCircle $width="136px" $height="136px"></DashedCircle>
            <img src={getImage(-2)} alt="circle 2" />
          </ImageHolder>
          <DotsContainer>
            {images.map((_, index) => (
              <button
                key={index}
                className={index === currentSlide ? "activeBtn" : ""}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </DotsContainer>
        </HeroSection>
        <MainImageContainer>
          <img key={currentSlide} src={images[currentSlide]} alt="main image" />
        </MainImageContainer>
        <ArrowHolder onClick={nextSlide}>
          <img src="/icons/arrow.svg" alt="" />
        </ArrowHolder>
      </SliderContainer>
      <StatisticsHolder>
        <p>
          We will take all the worry and guesswork out of your blockchain and
          cryptocurrency concerns.
        </p>
        {statistics.map((obj) => (
          <div key={obj.index}>
            <h3>{obj.number}</h3>
            <p>{obj.text}</p>
          </div>
        ))}
      </StatisticsHolder>
    </SectionContainer>
  );
};
export default MainSection;
