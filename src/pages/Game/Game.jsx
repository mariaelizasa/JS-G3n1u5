import React, { useState, useEffect } from "react";

import { Cell, Board, Display } from "./style.js";
import { useHistory } from "react-router-dom";

function Game() {
  const history = useHistory();
  const emptyBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const [round, setRound] = useState(false);
  const [generatesNumbers, SetgeneratesNumbers] = useState([]);
  const [clicks, setClicks] = useState([]);
  const [displayNumber, setDisplayNumber] = useState("");
  const [score, setScore] = useState(0);
  let randomNumber;

  useEffect(() => {
    delay(1000).then(() => {
      if (!round) {
        randomNumber = Math.floor(Math.random() * 9 + 1);
        SetgeneratesNumbers([...generatesNumbers, randomNumber]);
        setRound(true);
        setClicks([]);
      } else {
        showNumbers();
      }
    });
  }, [round]);
  

  const CompareArraysLength = () => {
    return generatesNumbers.length === clicks.length;
  };

  const CompareArraysContent = () => {
    return JSON.stringify(generatesNumbers) === JSON.stringify(clicks);
  };
  // passar para a pagina

  const showNumbers = async () => {
    for (let i = 0; i < generatesNumbers.length; i++) {
      setDisplayNumber(generatesNumbers[i]);
      await delay(300);
    }
    setDisplayNumber("");
  };

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <>
      <Display>
        <p>{displayNumber}</p>
      </Display>
      <Board>
        {emptyBoard.map((value, index) => (
          <Cell
            key={index}
            onClick={() => {
              setClicks([...clicks, parseInt(value)]);

              console.log(clicks, "depois");
              if (CompareArraysLength()) {
                if (CompareArraysContent()) {
                  setScore(score + 1);
                  setRound(false);
                } else {
                  history.push("/end", score);
                }
              }
              //}
            }}
          >
            {value}
          </Cell>
        ))}
      </Board>
    </>
  );
}

export default Game;
