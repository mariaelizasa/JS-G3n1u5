import React from "react";
import { Container } from "./style.js";

function Score(props) {
  return (
    <>
      <Container>
        <h1 data-testid="title">Fim de Jogo</h1>
        <p>score</p>
        <div className="score">{props.score}</div>
      </Container>
    </>
  );
}
export default Score;
