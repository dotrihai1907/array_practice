// example 1

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 8, 9, 12];

const arr = arr1.filter(item => arr2.includes(item));
console.log(arr); // [3, 4]

// // --------------------------------------

// // example 2

// const arr = [1, 7, 9, 2, 5, 3, 8];

// arr.sort((a, b) => b - a); // Descending
// console.log(arr.slice(0, 2)); // [9, 8]

// // --------------------------------------

// // example 3

// const arr = [1, 7, 9, 2, 5, 3, 8];
// const sum = 10;

// let arrSum = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === sum) {
//       arrSum.push(arr[i], arr[j]);
//     }
//   }
// }

// for (let i = 0; i < arrSum.length - 1; i += 2) {
//   let tempArray;
//   tempArray = arrSum.slice(i, i + 2);
//   console.log(tempArray); // [1, 9]; [7, 3]; [2, 8]
// }

// // --------------------------------------

// //example 4

// arr = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4];

// let newArr = new Set(arr);
// console.log([...newArr]); // [1, 2, 3, 4, 5, 6]

// // --------------------------------------

// // example 5

