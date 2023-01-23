// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

const value1 = 45;
const value2 = 23;
const value3 = 7;

if (value1 > value2 && value1 > value3) {
  console.log(value1 + " é o maior número");
} else if (value2 > value1 && value2 > value3) {
  console.log(value2 + " é o maior número");
} else {
  console.log(value3 + " é o maior número");
}
