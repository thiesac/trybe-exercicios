const books = require('./books');

const getNamedBook = () => {
    const theBook = books.find((book) => book.name.length === 26)
    return theBook.name
};
console.log(getNamedBook());
