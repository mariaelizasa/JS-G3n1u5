import React, { useState, useEffect } from "react";

import { Cell, Board, Display } from "./style.js";
import { useHistory } from "react-router-dom";
import * as Tone from "tone";

function Game() {
  const history = useHistory();
  const emptyBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const tones = ["G#3", "A4", "A#4", "B4", "C4", "G3", "D3", "D4", "F#3"];
  const [round, setRound] = useState(false);
  const [generatesNumbers, SetgeneratesNumbers] = useState([]);
  const [clicks, setClicks] = useState([]);
  const [displayNumber, setDisplayNumber] = useState("");
  const [score, setScore] = useState(0);

  let randomNumber;

  useEffect(() => {
    delay(1000)
      .then(() => {
        if (!round) {
          randomNumber = Math.floor(Math.random() * 9 + 1); //generate random numver
          SetgeneratesNumbers([...generatesNumbers, randomNumber]);
          setRound(true); // start the round
          setClicks([]);
        } else {
          showNumbers("");
        }
      })
      .catch((error) => alert("Oops, something went wrong!"));
  }, [round]);

  // compare the size arrays
  const CompareArraysLength = (arr) => {
    return generatesNumbers.length === arr.length;
  };

  // compare the content arrays
  const CompareArraysContent = (arr) => {
    return JSON.stringify(generatesNumbers) === JSON.stringify(arr);
  };

  // function to display sequence numbers
  const showNumbers = async () => {
    try {
      for (let i = 0; i < generatesNumbers.length; i++) {
        setDisplayNumber(generatesNumbers[i]);

        await delay(300);
      }
      setDisplayNumber("");
    } catch (error) {
      alert(error, "Oops, something went wrong!");
    }
  };

  // added tone.js
  const PlayTone = (value) => {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    synth.triggerAttack(tones[value - 1], now);
    synth.triggerRelease(now + 0.2);
  };

  // delay function
  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <>
      <Display>
        <p>{displayNumber}</p>
      </Display>
      <Board data-testid="display">
        {emptyBoard.map((value, index) => (
          <Cell
            key={index}
            onClick={() => {
              if (round) {
                let realTimeClicks = [...clicks, parseInt(value)];

                PlayTone(value);

                setClicks([...clicks, parseInt(value)]);

                if (CompareArraysLength(realTimeClicks)) {
                  if (CompareArraysContent(realTimeClicks)) {
                    setScore(score + 1); // set Score value
                    setRound(false);
                  } else {
                    history.push("/save", score); // redirect to page end game
                  }
                }
              }
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
