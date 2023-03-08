// crie uma função chamada toObject que, dada uma lista, retorna um objeto representando o carro

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = ([name, brand, year]) => ({name, brand, year})
console.log(toObject(palio));