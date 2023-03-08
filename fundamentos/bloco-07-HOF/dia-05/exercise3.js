// Escreva uma função que recebe o nome de uma pessoa e retorna uma mensagem de cumprimento

const greet = (name, ...message) => `${name} ${message}`

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'