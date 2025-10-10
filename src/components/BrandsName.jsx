import styled, { keyframes } from "styled-components";

const move = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const SectionHolder = styled.div`
  height: 78px;
  width: 100%;
  overflow: hidden;
  padding: 0px 115px;
  position: relative;
  display: flex;
`;

const ImageContainer = styled.div`
  display: flex;
  animation: ${move} 15s linear infinite;
  
  img {
    width: auto;
    height: 78px;
  }
`;

const BrandsNames = () => {
  return (
    <SectionHolder id="section-container" className="componentHolder">
      <ImageContainer>
        <img src="BrandsName.png" alt="brands" />
        <img src="BrandsName.png" alt="brands" />
      </ImageContainer>
    </SectionHolder>
  );
};

export default BrandsNames;