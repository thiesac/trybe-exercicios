function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
module.exports = myRemove;
// implemente seus testes aqui
console.log(myRemove([1, 2, 3, 4], 3));
// console.log(myRemove([1, 2, 3, 4], 5));