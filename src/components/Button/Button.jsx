import React from "react";
import { Container, RedirectButton } from "./style";

const Button = (props) => (
  <>
    <Container>
      <RedirectButton
        data-testid="button"
        onClick={props.onClick}
        onSubmit={props.onSubmit}
      >
        {props.label}
      </RedirectButton>
    </Container>
  </>
);

export default Button;
