//imprimir um quadrado de asterisco do tamanho de "n"
let number = 4;
let character = "*";
let line = "";

for (let i = 0; i < number; i += 1) {
  line += character;
}
for (let i = 0; i < number; i += 1) {
  console.log(line);
}
