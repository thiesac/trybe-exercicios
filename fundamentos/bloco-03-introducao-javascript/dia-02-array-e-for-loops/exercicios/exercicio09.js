let array = [];

for (let i = 0; i <= 25; i += 1) {
    array.push(i);
    for (let j = 0; j < array.length; j +=1) {
        console.log(array[j] / 2);
    }
}
