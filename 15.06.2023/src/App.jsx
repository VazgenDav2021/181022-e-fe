import React, { Component } from "react";
import Login from "./components/Login";

// extends означает что App не просто класс a классовый компонент который наследует методы реакта
class App extends Component {
  // здесь мы получаем параметры от родительских компонентов в качестве пропсов
  constructor(props) {
    // мы наследуем некие параметры от родительских компонент
    super(props);
    // здесь мы инициализируем начальное состояние нашего компонента
    this.state = {
      count: 0,
      users: [
        { name: "Vazgen" },
        { name: "Alexei" },
        { name: "Igor" },
        { name: "Yanna" },
      ],
      inputValue: "Prepod",
    };

    // для того чтобы могли использовать данный метод в контексте компонента App
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // пишем функцию но если не укажем ее на 16 строчке то в разметке ее использовать не поучется
  handleIncrement() {
    // здесь мы меняем текущее состаяния компонента.
    // не можем именовать сеттер функции как захотим.
    // есть один метод для этого и его пишут как  this.setState.
    // This.setState принемает фунцкию колбек которое возвращает
    // предыдущее состояние компонента
    this.setState((prevState) => {
      // здесь мы возращаем объект с обнавленным состоянием
      return {
        count: prevState.count + 1,
      };
    });
  }

  handleDecrement() {
    this.setState((prevState) => {
      if (prevState.count > 0) {
        return {
          ...prevState,
          count: prevState.count - 1,
        };
      }
      return prevState;
    });
  }

  // получаю id пользователя как параметр из строчки 60
  handleRemoveUser = (id) => {
    // здесь начинается процесс изменения состояния
    this.setState((prevState) => {
      // здесь я фильтрую ползьвоателей, и нахожу того пользователя из массива users
      // у которог id в массиве равен id который пришел в качестве параметра
      // и выкываю данного пользователя ис списка
      const filteredUsers = prevState.users.filter((_, idx) => idx !== id);
      // возвращаю все предущие свойства кроме users, поскольку мне надо его перезаписать
      return { ...prevState, users: filteredUsers };
    });
  };

  handleChange(e) {
    const inputValue = e.target.value;
    this.setState((prevState) => {
      return { ...prevState, inputValue };
    });
  }

  // один из жизниных циклов компонента. Он у нас отвечает за рендер JSX разметки
  render() {
    const { count, users, inputValue } = this.state;
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <Login myCount={count} />
        <button onClick={this.handleIncrement}>+</button>
        {users.map((user, idx) => {
          return (
            <p key={idx} onClick={() => this.handleRemoveUser(idx)}>
              {user.name}
            </p>
          );
        })}
        <input type="text" value={inputValue} onChange={this.handleChange} />
        <h1>{inputValue}</h1>
      </div>
    );
  }
}

export default App;
