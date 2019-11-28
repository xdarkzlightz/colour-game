import React, { useState, useEffect } from "react";

import shuffle from "shuffle-array";

import "./Game.css";
import Card from "./Card";
import Header from "./Header";

const randomColour = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

const initTime = 300000;
export default ({ setStarted }) => {
  const [time, setTime] = useState(initTime);
  const [colours, setColours] = useState([]);
  const [active, setActive] = useState([]);
  const [found, setFound] = useState([]);
  const [reset, setReset] = useState(true);

  useEffect(() => {
    if (reset) {
      // Creates a list of random colours
      const _colours = [];
      for (let i = 0; i < 24; i += 2) {
        const colour = randomColour();
        _colours.push(colour);
        _colours.push(colour);
      }
      shuffle(_colours);
      setColours(_colours);
      setActive([]);
      setFound([]);
      setTime(initTime);
      setReset(false);
    }

    const interval = setInterval(() => {
      setTime(time - 1000);
    }, 1000);
    if (time === 0 || found.length === 12) clearInterval(interval);
    return () => clearInterval(interval);
  }, [reset, time, found.length]);

  const cards = [];
  // Creates the cards and stores them the variable cards
  let c = 0;
  for (let r = 1; r <= 3; r++) {
    for (let p = 1; p < 8; p += 2) {
      cards.push(
        <Card
          pos={p}
          row={r}
          key={c}
          colour={colours[c]}
          id={c}
          active={active}
          found={found}
          setActive={setActive}
        />
      );
      cards.push(
        <Card
          pos={p + 1}
          row={r}
          key={c + 1}
          colour={colours[c + 1]}
          id={c + 1}
          active={active}
          found={found}
          setActive={setActive}
        />
      );
      c += 2;
    }
  }

  if (active.length > 1 && active[0].colour === active[1].colour) {
    setFound([...found, active[0].colour]);
    setActive([]);
  } else if (active.length === 2) {
    setTimeout(() => {
      setActive([]);
    }, 500);
  }

  if (found.length === 12) {
    return (
      <>
        <Header setReset={setReset} setStarted={setStarted} time={time} />
        <h1 className="game-over">Game Over, you won!</h1>
      </>
    );
  } else if (time === 0) {
    return (
      <>
        <Header setReset={setReset} setStarted={setStarted} time={time} />
        <h1 className="game-over">Game Over, you lost!</h1>
      </>
    );
  } else {
    return (
      <>
        <Header setReset={setReset} setStarted={setStarted} time={time} />
        <div className="game-grid">{cards}</div>
      </>
    );
  }
};
