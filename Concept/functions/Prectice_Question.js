// Write a code for BMI calculator

// function bmi(weight, height) {
//   return weight / (height * height);
// }

// console.log(bmi(62, 1.2).toFixed(2));

//2.Create a resusable  discount calculator (HOF)

// function discountcalculator(discount) {
//   return function (price) {
//     return price - price * (discount / 100);
//   };
// }

// let discounter = discountcalculator(10);
// console.log(discounter(2000));

// 3.Build a counter using closure

// function counter() {
//   let count = 0;
//   return function () {
//     count++; // 0
//     return count; // 1
//   };
// }

// let c = counter();
// console.log(c());// 1
// console.log(c());// 2

// let d = counter();
// console.log(d());


//4.Create a pure function to transform a value

function double(val){
  return  function(){
    return val*2;
  }

}
let v = double(5);
// console.log(double(5));
console.log(v());







