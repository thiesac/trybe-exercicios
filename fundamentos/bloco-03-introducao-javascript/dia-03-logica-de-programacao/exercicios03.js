//imprimir a maior e a menor palavra do array
let array = ["java", "javascript", "python", "html", "css"];
let longest = array[0];
let smallest = array[0];

for (let i = 0; i < array.length; i += 1) {
  let word = array[i].length;
  if (word > longest.length) {
    longest = array[i];
  }
}
console.log("A palavra mais longe é: " + longest);

for (let i = 0; i < array.length; i += 1) {
  let word = array[i].length;
  if (word < smallest.length) {
    smallest = array[i];
  }
}
console.log("A palavra mais curta é: " + smallest);
