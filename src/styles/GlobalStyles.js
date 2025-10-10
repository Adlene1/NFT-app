import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Outfit';
  src: url('fonts/Outfit-Variable.woff2.ttf') format('truetype');
  font-weight: 100 900; /* variable range */
  font-style: normal;
  font-display: swap;
}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: white;
    font-family: 'Outfit',sans-serif;
}
body {
    width: 100%;
    height: 100vh;
    background-color: #09090A;
      @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
}
.hoveredBtn{
    outline: none;
    border: 0.5px solid #ffffff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    background: linear-gradient(to right, #0500fa, #e01e5a);
    background-size: 0% 100%;
    background-repeat: no-repeat;
    transition: background-size 0.3s ease;
    border-radius: 8px;
}
.hoveredBtn:hover {
    background-size: 100% 100%;
  }
.cardsBtns{
    height: 30px;
    border: 0.5px solid #1e1b33;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    background: linear-gradient(to right, #0500fa, #e01e5a);
    border-radius: 8px;
    margin-right: 5px;
}
.componentHolder{
  margin-bottom: 115px;
}
#section-container{
  @media (max-width: 800px) {
    padding: 0px 61px 0px 61px!important;
  }
  @media (max-width: 700px) {
    padding: 0px 17px 0px 15px !important;
  }
}
`;
export default GlobalStyles;