// use .some() to cehck if any student has scored below 35:
let arr = [100, 26, 51, 90];
let newarr = arr.some(function (val) {
  return val < 35;
});

console.log(newarr);