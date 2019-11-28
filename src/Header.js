import React from "react";
import prettyMs from "pretty-ms";

import "./Header.css";

export default ({ time, setStarted, setReset }) => {
  return (
    <div className="title-bar">
      <button className="back-button" onClick={() => setStarted(false)}>
        Back
      </button>
      <button className="reset-button" onClick={() => setReset(true)}>
        Reset
      </button>
      <h1 className="title inline">Colour Game</h1>
      <h3 className="timer">
        Timer:{" "}
        <span className={time <= 60000 ? "red" : ""}>
          {prettyMs(time, { colonNotation: true })}
        </span>
      </h3>
    </div>
  );
};
