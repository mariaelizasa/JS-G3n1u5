import React from "react";

import logo from "../../assets/logo.png";
import { Container } from "./style";

export default function Logo() {
  return (
    <Container>
      <img src={logo} alt="logo" />
    </Container>
  );
}
