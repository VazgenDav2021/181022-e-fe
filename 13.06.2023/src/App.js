import { useState } from "react";
import "./App.css";
import Login from "./components/Login";

const objValues = {
  city: "Yerevan",
  users: [{ name: "Stepan" }, { name: "Exmaple1" }],
};

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // так лучше не делать при асинхорнных операциях чтобы данные не утерялись
    // setCount(count + 1);
    setCount((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1);
  };
  return (
    <div className="App">
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
      {/* Как проп можно передовать как переменные так и разные типы данных */}
      {/* {...objValues} означает что можно передовать срзу открытый объект как <Login  count={count} name="Alexei" number={2}  city="Yerevan" users={[{ name: "Stepan" }, { name: "Exmaple1" }]}   */}
      <Login
        count={count}
        name="Alexei"
        handleDecrement={handleDecrement}
        number={2}
        {...objValues}
      />
    </div>
  );
}

export default App;
