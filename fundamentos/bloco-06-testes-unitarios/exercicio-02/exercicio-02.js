function myFizzBuzz(num) {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}
module.exports = myFizzBuzz;
// implemente seus testes aqui
// console.log(myFizzBuzz(15));
// console.log(myFizzBuzz(9));
// console.log(myFizzBuzz(10));
console.log(myFizzBuzz(7));