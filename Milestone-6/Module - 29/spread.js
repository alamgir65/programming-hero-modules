const numbers = [10, 21, 2 , 45, 78, 5];
const mx = Math.max(numbers);
console.log(mx); // NaN

const mx1 = Math.max(...numbers);
console.log(mx1); // 78

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const final = [...arr1, 10, 20 , 30, ...arr2];
console.log(final); // [ 1, 2, 3, 10, 20, 30, 4, 5, 6 ]
console.log(...final); // 1 2 3 10 20 30 4 5 6