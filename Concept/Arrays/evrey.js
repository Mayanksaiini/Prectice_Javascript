//Use .every() to check if all numbers are even:
let arr = [100, 24, 20, 0];
let newarr = arr.every(function (val) {
  return val % 2 === 0;
});

console.log(newarr);
