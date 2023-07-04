import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import { Header } from "./components";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        {routes.map((eachRoute, index) => {
          return (
            <Route
              path={eachRoute.path}
              key={index}
              Component={eachRoute.element}
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
