const books = require('./books');

// Adicione o código do exercício aqui:

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947
const authorBornIn1947 = () => {
    return books.find((book) => book.author.birthYear === 1947 ).author.name
}
// console.log(authorBornIn1947());





