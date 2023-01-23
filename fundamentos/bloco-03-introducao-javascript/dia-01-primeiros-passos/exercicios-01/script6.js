//Converte notas dadas em conceitos de A a F
let grade = 400;

if (grade >= 90 && grade <= 100) {
  console.log("Sua nota é A");
} else if (grade < 90 && grade >= 80) {
  console.log("Sua nota é B");
} else if (grade < 80 && grade >= 70) {
  console.log("Sua nota é C");
} else if (grade < 70 && grade >= 60) {
  console.log("Sua nota é D");
} else if (grade < 60 && grade >= 50) {
  console.log("Sua nota é E");
} else if (grade < 50) {
  console.log("Sua nota é F");
} else {
  console.log("Valor inválido");
}
