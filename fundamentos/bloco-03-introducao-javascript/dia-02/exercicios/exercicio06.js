let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        newArray.push(numbers[i])
    }
}
if (newArray.length > 0) {
    console.log(newArray.length);
} else {
    console.log("Nenhum valor ímpar encontrado");
}