import React from "react";
import "./Card.css";
export default ({ pos, row, colour, id, active, found, setActive }) => {
  return (
    <div
      className="card"
      style={{
        gridColumn: pos,
        gridRow: row,
        background:
          active.some(c => c.id === id) || found.some(c => c === colour)
            ? colour
            : "#fff"
      }}
      onClick={e => {
        if (!active.some(c => c.id === id) && active.length < 2)
          setActive([...active, { id, colour }]);
      }}
    />
  );
};
