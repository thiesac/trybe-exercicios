let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];
let multiplication;

for (let i = 1; i < numbers.length; i += 1) {
  for (let j = 0; j < i; j += 1) {
    multiplication = numbers[i] * numbers[j];
  }
  newArray.push(multiplication);
}
console.log(newArray);
