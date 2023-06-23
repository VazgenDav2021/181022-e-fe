// import React, { useState } from "react";
// import ChildComponent from "./ChildComponent";
// import ChildComponent2 from "./ChildComponent2";
// const App = () => {
//   const [counter, setCounter] = useState(0);
//   console.log("Component Rendered due to change of state");

//   return (
//     <div>
//       <button onClick={() => setCounter(counter + 1)}>Increment</button>
//       <ChildComponent counter={counter} />
//       <ChildComponent2 />
//     </div>
//   );
// };

// export default App;

import React, { lazy, Suspense } from "react";
import "./App.css";

const MainBlog = () => {
  return (
    <div style={{ width: "100%", height: "700px", background: "red" }}>1</div>
  );
};

const AboutMe = lazy(() => import("./AboutMe"));
const Contact = lazy(() => import("./Contact"));
const Info = lazy(() => import("./Info"));

const App = () => {
  return (
    <div>
      <MainBlog />
      <Suspense fallback={<div>Loading...</div>}>
        <AboutMe />
        <Contact />
        <Info />
      </Suspense>
    </div>
  );
};

export default App;
