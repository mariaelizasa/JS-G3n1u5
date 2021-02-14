import React, { useEffect, useState } from "react";
import { Cell, Board, Display } from "./style.js";

function Keyboard() {
  const emptyBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const [round, setRound] = useState(false);
  const [sorteado, setSorteado] = useState([]);
  const [clicados, setClicados] = useState([]);
  const [numeroDaVez, setNumeroDaVez] = useState(0);

  let numberSorted;

  useEffect(() => {
    delay(2000).then(() => {
      numberSorted = RandomNumber();
      exibeNumeros();
      console.log(exibeNumeros(), "aa");

    });
  }, [numberSorted]);

  const handleClick = (value) => {};
  const RandomNumber = () => {
    let random = Math.floor(Math.random() * 9 + 1);
    setSorteado(() => [...sorteado, random]);
    return random;
  };

  
  // passar para a pagina

  const exibeNumeros = () => {
    for (let i = 0; i < sorteado.length; i++) {
      delay(300).then(() => {
        setNumeroDaVez(sorteado[i]);
      });
    }
  };

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <>
      <Display>
        <p>{numeroDaVez}</p>
      </Display>
      <Board>
        {emptyBoard.map((value, index) => (
          <Cell key={index} onClick={() => setClicados([...clicados, value])}>
            {value}
          </Cell>
        ))}
      </Board>
    </>
  );
}
export default Keyboard;
