import React from "react";
import { useState } from "react";

export const Wrapper = (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{ background: "red", padding: "20px" }}>
      {props.children}
      <button onClick={() => setCounter(counter + 1)}>Click</button>
    </div>
  );
};
