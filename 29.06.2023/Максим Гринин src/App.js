import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { editUserNameAction } from "./store/reducers/userReducer";

const App = () => {
  const dispatch = useDispatch();

  const { userName } = useSelector((state) => {
    return state.userName;
  });

  const doEditUserName = (new_name) => {
    dispatch(editUserNameAction(new_name));
  };

  return (
    <div>
      <p>{userName}</p>
      <button onClick={() => doEditUserName("Vazgen")}>Maxim -> Vazgen</button>
      <button onClick={() => doEditUserName("Maxim")}>Vazgen -> Maxim</button>
    </div>
  );
};

export default App;
