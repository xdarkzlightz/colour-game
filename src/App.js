import React, { useState } from "react";
import "./App.css";
import Game from "./Game";

function App() {
  const [started, setStarted] = useState(false);

  if (started) {
    return <Game setStarted={setStarted} />;
  } else {
    return (
      <div className="container">
        <h1 className="title">Colour Game</h1>
        <button className="play-button" onClick={() => setStarted(true)}>
          Play
        </button>
      </div>
    );
  }
}

export default App;
