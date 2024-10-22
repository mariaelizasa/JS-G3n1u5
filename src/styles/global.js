import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif !important;
  }
  body {
    background-color: #1C2B2D;
  }

  html, body {
    height: 100%;
  }

  button {
    cursor: pointer;

  }

  .saveInput { 
    outline: none;
    width: 320px;
    border: 2px solid #1F6F8B;
    color: #99A8B2;
    background-color: #1C2B2D;
    height: 80px;
    border-radius: 10px;
    font-size: 24px;
    position: absolute;
    bottom: 120px;
    padding-left: 15px;
    @media screen and (max-width: 360px) {
    width: 300px;
  } 
  ::placeholder {
    color: #99A8B2;
   } 
  }

  @font-face {
    font-family: 'Montserrat', sans-serif !important;
    font-style: normal;
    src: url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
}
`;

export const override = {
  display: "flex",
  margin: "30vh auto",
};

export default GlobalStyle;
