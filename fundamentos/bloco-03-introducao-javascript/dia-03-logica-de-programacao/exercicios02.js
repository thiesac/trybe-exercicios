//estrutura que inverte a palavra
let word = 'tryber';
let invertedWord = '';

for (let i = word.length -1 ; i >= 0; i -= 1) {
    invertedWord += word[i]
}
console.log(invertedWord);