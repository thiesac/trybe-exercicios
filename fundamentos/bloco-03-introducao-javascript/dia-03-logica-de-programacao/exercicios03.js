//imprimir a maior e a menor palavra do array
let array = ['java', 'javascript', 'python', 'html', 'css'];
let longest = 0;

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > longest) {
        longest = array[i]
    }
}
console.log(longest);   