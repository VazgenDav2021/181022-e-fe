// 1. При каждом клике на кнопку будет увеличиваться счетчик. Однако, у вас есть два требования:
// Каждое обновление счетчика должно происходить только после завершения серии кликов. Если пользователь быстро нажимает на кнопку несколько раз подряд, то счетчик должен обновиться только один раз после последнего клика.

import React, { useState, useMemo, useCallback } from "react";

const Task1 = () => {
  // сосотание для хранения счетчика
  const [count, setCount] = useState(0);
  // состояние для хранения id таймера
  const [timeOutId, settimeOutId] = useState(null);

  // функция для обработки кликов
  const handleClick = useCallback(() => {
    if (timeOutId) {
      // очистка предыдущего таймеа
      clearTimeout(timeOutId);
    }

    // запуск нового таймера, который обнавляет count  через определнное время
    const newTimeOutId = setTimeout(() => {
      setCount((prevState) => prevState + 1);
    }, 500);

    settimeOutId(() => newTimeOutId);
  }, [timeOutId]);

  // Мемоизируем значение счетчика
  const memoizeCount = useMemo(() => count, [count]);

  return (
    <div>
      <p>{memoizeCount}</p>
      <button onClick={handleClick}>Incrment</button>
    </div>
  );
};

export default Task1;

// import { useCallback, useEffect, useState } from "react";

// const App = () => {
//   // const [count, setCount] = useState(0);
//   const [clickCount, setClickCount] = useState(0);
//   const [timeoutId, setTimeoutId] = useState(null);

//   useEffect(() => {
//     document.title = `Click Count: ${clickCount}`;
//   }, [clickCount]);

//   const handleClick = useCallback(() => {
//     clearTimeout(timeoutId);
//     const newTimeoutId = setTimeout(() => {
//       setClickCount((prevCount) => prevCount + 1);
//     }, 500);

//     setTimeoutId(newTimeoutId);
//   }, [timeoutId]);
//   return (
//     <div>
//       <h1>Click Counter: {clickCount}</h1>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// };

// export default App;
