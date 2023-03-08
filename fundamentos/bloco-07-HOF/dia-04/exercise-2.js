// Crie uma função sum que, dado um número ilimitado de parâmetros, retorna a soma desses parâmetros. 

const sum = (...numbers) => {
    let total = 0;
    numbers.map((number) => total += number)
    return total
}
console.log(sum(4, 5, 6));