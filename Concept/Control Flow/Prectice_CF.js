// // // PRECTICE SET 1
// // function test() {
// //   return "Done"; // FUNCTION ENDS HERE
// //   console.log("Hello"); // THIS WILL NOT EXCUTES
// // }
// // test();

// //1. Positive, negative, or zero

// console.log("Using if else statements");

// let number = -5;
// if (number > 0) {
//   console.log("positive");
// } else if (number < 0) {
//   console.log("Negative");
// } else {
//   console.log("Zero");
// }

// console.log("Using early return statements");

// function NegPO() {
//   if (number > 0) {
//     return "Postive";
//   }
//   if (number < 0) {
//     return "Negative";
//   }
//   if ((number = 0)) {
//     return "Zero";
//   }
// }
// console.log(NegPO(number));

// 2. Even or odd

// let numberr = 8

// if (numberr % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// function EvOd(numberr) {
//   if (number % 2 === 0) {
//     return "Even";
//   } else if (numberr % 2 === 1){
//     return "Odd";
//   }
// }

// console.log(EvOd(numberr));

// 3. Voting eligibility

// let age = 20;
// if (age <= 18) {
//   console.log("You're not Eligible for vote");
// } else {
//   console.log("You're Eligible for vote");
// }

//4.Greater of two numbers
// let a = 10;
// let b = 20;

// if (a > b) {
//   console.log(a + " is greater");
// } else if (b > a) {
//   console.log(b + " is greater");
// } else {
//   console.log("Both numbers are equal");
// }

// 5. Pass or fail

// let marks = 50;
// if (marks >= 40) {
//   console.log("You're passed");
// } else console.log("you're failed");

// // using early return
// function PaFa() {
//   if (marks >= 40) {
//     return passed;
//   }
//return "Your failed";
// }

// 6.Divisible by 5

// let value = 25;

// if (value % 5 === 0) {
//   console.log("Divisible by 5");
// } else {
//   console.log("can't divide");
// }

// 7.Temperature checker

// let temp = 35;

// if (temp > 30) {
//   console.log("It's Hot!!");
// } else {
//   console.log("Not so Hot!!");
// }

// function tem() {
//   if (temp > 30) {
//     return "Its Hot";
//   }
//   return "Not so Hot";
// }
// console.log(tem(temp));

// 8. Password check

// let password = "abc123";
// let enteredPassword = "abc123";

// if (enteredPassword === password) {
//   console.log("Login successful");
// } else {
//   console.log("Incorrect password");
// }

//9.Discount eligibility

// 9. Discount eligibility

let amount = 2000;
let finalPrice;

if (amount >= 1000) {
  finalPrice = amount - (amount * 10 / 100);
} else {
  finalPrice = amount;
}

console.log("Final price: ₹" + finalPrice);