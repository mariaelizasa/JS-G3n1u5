import React from "react";

import logo from "../../assets/ranking.png";
import { Container } from "./style";

const Logo = (props) => {
  return (
    <Container>
      <img src={props.selectImage} onClick={props.onClick} alt="logo" />
    </Container>
  );
};
export default Logo;
