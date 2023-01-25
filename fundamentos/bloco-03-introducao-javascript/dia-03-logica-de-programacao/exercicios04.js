//imprimir o maior número primo entre 2 e 50
let greatest = 0;

for (let i = 0; i < 50; i += 1) {
    if (i % 2 !== 0) {
        if (i > greatest) {
            greatest = i;
        }
    }
}
console.log(greatest);
