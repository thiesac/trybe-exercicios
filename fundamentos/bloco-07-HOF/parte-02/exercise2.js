const books = require('./books');

// Retorne o nome do livro com menor número de caracteres (menor nome)

const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
};
console.log(smallerName());
