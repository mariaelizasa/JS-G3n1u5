import React from "react";

import { useHistory } from "react-router-dom";

import { Container } from "./style";

const Logo = (props) => {
  const history = useHistory();

  return (
    <Container position={history.location.pathname}>
      <img src={props.selectImage} onClick={props.onClick} alt="logo" />
    </Container>
  );
};
export default Logo;
