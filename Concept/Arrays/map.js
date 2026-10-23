// We use map to access val inside array 


let arr = [1, 2, 5, 8];
let newarr = arr.map(function (val) {
  return val * val;
});

console.log(newarr);