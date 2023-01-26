//imprimir o maior número primo entre 2 e 50
let greatest = 0;

for (let i = 2; i <= 50; i += 1) {
  let isPrime = true;
  for (let j = 2; j < i; j += 1) {
    if (i % j === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    greatest = i;
  }
}
console.log(greatest);
