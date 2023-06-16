import React, { Component } from "react";

export default class Login extends Component {
  // это метод вызываете при создании компонента.
  // Здесь инициализирутся состояние компонента и привязываются методы
  constructor(props) {
    console.log("constructor");
    // В пропы попадет значение myCount из родителья App
    super(props);

    this.state = {
      users: [],
    };
  }

  // этот методы вызывается сразу после монтирования компонента в DOM.
  // Здесь в онавном выполняются запросы к сервер, и устанавливаются слушатели события
  componentDidMount() {
    console.log("componentDidMount");
    // делаем запрос
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // парсим json
        return res.json();
      })
      .then((data) => {
        // изменяем состояния компонента, полученными данными из сервера
        this.setState((prevState) => {
          return { ...prevState, users: data };
        });
      });

    window.addEventListener("scroll", this.handleScrole);
  }

  handleScrole() {
    console.log("You are scrolling...");
  }

  // вызываетя псоле обнавления компонента. Здесь в онсвном выполняются
  // десйтвия на оноце обанвленных свойст и состояния компонента
  componentDidUpdate(prevProp, prevState) {
    console.log("componentDidUpdate");
    if (this.props.myCount !== prevProp.myCount) {
      console.log("У нас изменился проп!!!");
    } else {
      console.log("Все осталось как есть");
    }
  }

  // Этод метод позволяет оптимизировать обнавления компонента.
  // Если наш компонент не должен обновлятся то возвращаем false
  // Еслид должен то true
  shouldComponentUpdate(nextProp, nextState) {
    console.log("shouldComponentUpdate");
    if (nextProp.myCount > 10) {
      return false;
    } else {
      return true;
    }
  }

  // последний по очереди жизненый цикл, в нем в оснавном описываются очищающие функции каких то слушателей
  componentWillUnmount() {
    console.log("componentWillUnmount");
    window.removeEventListener("scroll", this.handleScrole);
  }

  render() {
    return <div>{this.props.myCount}</div>;
  }
}
