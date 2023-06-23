import React from "react";
import { Wrapper } from "./Wrapper";

const ChildComponent2 = () => {
  console.log("render ChildComponent2");
  return <Wrapper>ChildComponent2</Wrapper>;
};

export default ChildComponent2;
