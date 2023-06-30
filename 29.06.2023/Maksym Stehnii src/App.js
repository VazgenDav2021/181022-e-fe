import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./store/reducers/nameReducer";

const App = () => {
  // Здесь надо dispatch делать в хуке useEffect
  const dispatch = useDispatch();
  dispatch(changeName("Alex"));
  const userName = useSelector((state) => state.userName);
  return (
    <div>
      <p>{userName}</p>
    </div>
  );
};

export default App;
