// //  функция поскольку она написанна за пределы объекта и класса
// const printInfoAboutUser = function () {
//   return `${this.name} is ${this.age} years old. ${
//     this.isFrontend
//       ? "He is frontend developer"
//       : "He is not frontend developer"
//   }`;
// };

// До использования this
// const user = {
//   name: "Vazgen",
//   age: 23,
//   isFrontend: true,

//   printThis() {
//     console.log(this);
//   },

//   // методы поскольку он у нас написан в объекте
//   printInfoAboutUser: function () {
//     return `${user.name} is ${user.age} years old. ${
//       user.isFrontend
//         ? "He is frontend developer"
//         : "He is not frontend developer"
//     }`;
//   },
// };

// console.log(user.printInfoAboutUser());

// const user2 = {
//   name: "Alexei",
//   age: 18,
//   isFrontend: false,

//   printInfoAboutUser: function () {
//     return `${user2.name} is ${user2.age} years old. ${
//       user2.isFrontend
//         ? "He is frontend developer"
//         : "He is not frontend developer"
//     }`;
//   },
// };

// console.log(user2.printInfoAboutUser());
// До использования this

// Когда узнали про this
function printInfoAboutUser(gender) {
  return `${this.name} ${this.age} лет. ${gender === "M" ? "Он" : "Она"} ${
    this.isFrontend ? "фронтенд разработчик" : "не фронтенд разработчик"
  }`;
}

const user = {
  id: "001",
  name: "Vazgen",
  age: 23,
  isFrontend: true,
};

const user2 = {
  id: "002",
  name: "Alexei",
  age: 18,
  isFrontend: false,
};

const user3 = {
  id: "003",
  name: "Napoleon",
  age: 200,
  isFrontend: false,
};

// call первым аргументом как контекст принял объект user с его значениям.
// После первого парамтра начиная ("М") идут параметры для функции (printInfoAboutUser)
const userInfo = printInfoAboutUser.call(user, "M");
// apply делает то же самое, в [] передаем параметры для функции (printInfoAboutUser).
const userInfo2 = printInfoAboutUser.apply(user2, ["M"]);
console.log({ userInfo, userInfo2 });
// bind возвращает нам новую фунцкию которая должна быть вызванна
// параемтры для функции (printInfoAboutUser) можно писать как сразы после контекста(user3).
// Так и во время вызова функции которая образовалалсь в результате вуыполния userInfo3
// const userInfo3 = printInfoAboutUser.bind(user3, "M");
// console.log(userInfo3());
const userInfo3 = printInfoAboutUser.bind(user3);
console.log(userInfo3("M"));
// Когда узнали про this
