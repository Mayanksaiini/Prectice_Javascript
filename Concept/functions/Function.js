//Q1.What's the difference between funciton declaration adn expression in terms of hoisting?

// adcd(); // can hoist
// function adcd() {
//   console.log("Simple hoisting");
// }

// val(); // can't hoist

// const val = function () {
//   console.log("Simple hoisting");
// };

//Q2.function to fat arrow fucntion

//Arrow Function

// let adc = (a = 0, b = 0) => {
//   return a * b;
// };

// console.log(adc(1, 1));

// Q3.What does the ... operator mean in parameters?

// function cd(...val){
// console.log(val);
// }

// cd(1,2,4,5,6);

// Q4.Use rest parameter to accep any number of scores and return the total.

// function getScore(...score) {
//   let total = 0;
//   score.forEach(function (val) {
//     total = total + val;
//   });
//   return total;
// }

// console.log(getScore(10, 11, 15, 42));

//Q5.Fix the function using early return

// function Check_age(age){
//     if(age>18){
// 	console.log("Allowed");
// 	}else{
// 	console.log("Not Allowed");
// 	}
// }

// Check_age(20);

// function check_age(age) {
//   if (age > 18) return "Allowed ";
//   return "Too young";
// }

// console.log(check_age(20));

// Q6.Can you assing a funciton to a variable and then call it ?

// let adc = function () {
//   console.log("Hello World");
// };

// adc();

//Q7.Pass a fucntion into another function and excute it inside.

// function abcd(val) {
//   val();
// }

// abcd(function () {
//   console.log("hey");
// });

// function war(val) {
//   val();
// }

// war(function () {
//   console.log("Print War (main function)");
// });

// Q8.What is a higher-order function?

// 1.function return a function

// function HO() {
//   return function () {
//     console.log("1.function return a function");
//   };
// }

// console.log(HO());

// function HO() {
//   return function () {
//     console.log("1. Function returns a function");
//   };
// }

// HO()();

// // Or 2. funciton calls a function

// // function HO1() {
// //   console.log("2.Funciton calls a function");
// // }

// function HO1() {
//   console.log("2. Function Calls a function");
// }

// function main() {
//   HO1();
// }

// main();

// Q9.Pure & Impure  function-

// 1.Pure Function

// function score1(a, b) {
//   return a + b;
// }

// console.log(score1(10, 20)); // 30
// console.log(score1(10, 20)); // 30

//2.Impure Function


// let total = 0;

// function score(value) {
//     total = total + value;
//     return total;
// }

// console.log(score(10)); // 10
// console.log(score(20)); // 30
// console.log(score(20)); // 50





