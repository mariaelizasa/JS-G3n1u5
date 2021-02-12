import React, { useState } from "react";
import { Cell, Board, Display } from "./style.js";

function Keyboard() {
  const emptyBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const [order, setorder] = useState();
  const [hide, setHide] = useState(false);

  const handleClick = (value) => {
    console.log(value, "clicado");
  };

  const sorteia = () => {
    return Math.floor(Math.random() * 9 + 1);
  };

  return (
    <>
      <Display>
        <p>{sorteia()}</p>
      </Display>
      <Board>
        {emptyBoard.map((value, index) => (
          <Cell key={index} onClick={() => handleClick(value)}>
            {value}
          </Cell>
        ))}
      </Board>
    </>
  );
}
export default Keyboard;
