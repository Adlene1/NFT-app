import React from 'react';
import styled from 'styled-components';

const NavbarHolder = styled.nav`
  width: 100%;
  height: 84px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  padding: 0px 115px 0px 115px;
  overflow: hidden;
`;
const LogoHolder = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;

  h3 {
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
  }
  @media (max-width: 1100px) {
    h3 {
      font-size: 18px;
    }
    > div {
      width: 40px;
      height: 40px;
    }
  }
`;
const Logo = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(#0500fa, #e01e5a);

  font-size: 18px;
  font-weight: 500;
  font-family: "Outfit";
  display: flex;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  rotate: 45deg;
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 321px;
  height: 100%;
  margin-left: 93px;
  @media (max-width: 1100px) {
    margin-left: 0px;
    /*width: 157px;*/
    justify-content: center;
    gap: 16px;
    p {
      font-size: 13px;
    }
  }
  @media (max-width: 650px) {
    display: none;
  }
`;
const ActionBtnsHolder = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  @media (max-width: 1100px) {
    gap: 5px;
  }
`;
const SearchInput = styled.input`
  width: 185px;
  height: 44px;
  border-radius: 8px;
  background-color: #1e1b33;
  border: 1px #e7e7e766 solid;
  padding-left: 10px;
  @media (max-width: 1100px) {
    max-width: 140px;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;
const Btn = styled.button`
  width: 128px;
  height: 44px;
  background: linear-gradient(to right, #0500fa, #e01e5a);
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: 500;
  @media (max-width: 1100px) {
    width: 100px;
    font-size: 16px;
  }
`;

const NavBar = () => {
  //const [isMenuOpen , setIsMenuOpen] = useState(false)
  return (
    <NavbarHolder id="section-container">
      <LogoHolder>
        <Logo>N</Logo>
        <h3>NFTICO</h3>
      </LogoHolder>
      <Menu>
        <p>Explore</p>
        <p>Stats</p>
        <p>Drops</p>
        <p>Activity</p>
      </Menu>
      <ActionBtnsHolder>
        <SearchInput placeholder="Search..."></SearchInput>
        <Btn>Get in Touch</Btn>
      </ActionBtnsHolder>
    </NavbarHolder>
  );
};
export default NavBar;
