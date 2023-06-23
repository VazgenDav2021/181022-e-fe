import React from "react";

const ChildComponent = ({ counter }) => {
  console.log("Parent Component Rendered");
  return <div>Hello World {counter + 1} times</div>;
};

// React.memo мемоизировал компонент ChildComponent и он не ререндерится при рендеред родителя
export default React.memo(ChildComponent);
