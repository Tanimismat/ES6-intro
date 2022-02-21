const numbers = [23, 43, 33, 67, 87,]
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(33, 76, 99);
const maxInArray = Math.max(...numbers)
// console.log(max, maxInArray)

const numbers2 = [13, ...numbers, 300];
numbers.push(56)
console.log(numbers);
console.log(numbers2); 
