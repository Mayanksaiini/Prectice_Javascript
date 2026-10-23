// // // Q1.Create an array with 3 fruits and print the second fruit.

// // let fruits = ["banana", "guava", "apple"];
// // fruits.push("Mango"); //  in the ending
// // console.log(fruits);

// // fruits.unshift("leache"); // in the starting
// // console.log(fruits);

// // fruits.pop(); // remove from the last
// // console.log(fruits);

// // fruits.splice(2, 0, "kela"); // adding & removing from particular array
// // console.log(fruits);

// // fruits.sort();
// // console.log(fruits);

// // fruits.sort().reverse();
// // console.log(fruits);

// // let newfruits = fruits.slice(1, 4); // extracting new array
// // console.log(newfruits);

// // 1. Add 50 to the end of [10, 20, 30] using push().

// let arr = [10, 20, 30];
// arr.push(50);
// console.log(arr);

// // 2. Remove the first element from [5, 10, 15, 20] using shift().
// // arr.shift();
// // console.log(arr);

// // 3. Use splice() to remove 20 from  [10, 20, 30].

// // arr.splice(1,1,);
// // console.log(arr);

// // 4. Use slice() to get [20, 30] from [10, 20, 30, 40].

// // let result = arr.slice(1, 3);
// // console.log(result);

// // 5. Use map() to square every number in [2, 3, 4].

// let result1 = arr.map(function (val) {
//   return val * val;
// });
// console.log(result1);

// // 6. Use filter() to get only odd numbers from [1, 2, 3, 4, 5, 6].

// let result = result1.filter(function (val) {
//   return val <= 1000;
// });
// console.log(result);

// // 7. Use reduce() to calculate the sum of [10, 20, 30, 40].

// let sum = result.reduce(function (acc, val) {
//   return acc + val;
// }, 0);

// console.log(sum);

// // 8. Use find() to get the first number greater than 10 from [4, 8, 12, 16].

// let arr = [1, 26, 51, 20];
// let newarr = arr.find(function (val) {
//   return val < 10;
// });

// console.log(newarr);

// 9. Use some() to check whether [1, 3, 6, 9] contains an even number.

// let arr = [1, 3, 3, 9];
// let find_number = arr.some(function (val) {
//   return val % 2 === 0;
// });

// console.log(find_number);

// 10. Use every() to check whether all numbers in [10, 20, 30] are greater than 5.

let arr = [100, 24, 20, 0];
let newarr = arr.every(function (val) {
  return val % 2 === 0;
});

console.log(newarr);













