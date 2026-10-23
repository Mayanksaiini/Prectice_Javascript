let arr = [1, 2, 5, 8];

let sum = arr.reduce(function (acc, val) {
  return acc + val;
}, 0);

console.log(sum);