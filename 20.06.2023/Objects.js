// const users = {
//   user1: 200,
//   user2: 34,
//   user3: 45,
//   user4: 400,
//   user5: 600,
// };

// для того чтобы узнать количство пользователей мы должны посчитать сколько ключей в объекте
// const keysOfUsers = Object.keys(users);
// console.log({ keysOfUsers }); // [ 'user1', 'user2', 'user3', 'user4', 'user5' ]
// console.log({ keysOfUsersLength: keysOfUsers.length });

// для того чтобы посчитать сколько каждый месяц сумарно мне платят я должен прибавить все цифры
// const valuesOfUsers = Object.values(users);
// console.log({ valuesOfUsers }); // [ 200, 34, 45, 400, 600 ]
// const sum = valuesOfUsers.reduce((prev, acc) => {
//   return prev + acc;
// }, 0);
// console.log({ sumOfUsersPay: sum });

// Получить все
// let usersCount = 0;
// let userPayingAmount = 0;
// Object.entries(users).map(([key, value]) => {
//   usersCount += 1;
//   // индексация идет в массице с 0я, элемент с индексом 1 это у нас значения в массиве
//   userPayingAmount += value;
// });

// console.log({ userPayingAmount, usersCount });
