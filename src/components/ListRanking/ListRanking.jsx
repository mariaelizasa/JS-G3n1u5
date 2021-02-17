import React from "react";
import { Container } from "./style";

const ListRanking = (props) => {
  return (
    <Container props={props.index}>
      <ul>{props.index}</ul>
      <ul data-testid="name">{props.name}</ul>
      <ul data-testid="score" className="score">
        {props.score}
      </ul>
    </Container>
  );
};

export default ListRanking;
