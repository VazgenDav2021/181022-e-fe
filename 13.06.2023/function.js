const isMale = true;
function calcSum(num1 = isMale ? 4 : 2, num2 = 0) {
  console.log({ num1, num2 });
  return num1 + num2;
}

console.log(calcSum(2, 3));
console.log(calcSum(2));
console.log(calcSum());
