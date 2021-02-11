import React from "react";
import { Container, RedirectButton } from "./style";

const Button = (props) => (
  <Container>
    <RedirectButton onClick={props.onClick}>{props.label}</RedirectButton>
  </Container>
);

export default Button;
