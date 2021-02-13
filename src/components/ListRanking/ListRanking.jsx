import React from "react";
import { Container } from "./style";

const ListRanking = (props) => {
  return (
    <Container>
      <ul>{props.index}</ul>
      <ul>{props.name}</ul>
      <ul className="score">{props.score}</ul>
    </Container>
  );
};

export default ListRanking;
