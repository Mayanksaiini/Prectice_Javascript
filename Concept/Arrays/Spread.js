//  Merge two arrays using spread operator:
let a = [1,2];
let b = [3,4];

let c = [...a, ...b];

console.log(c);

let countries = ["USA","UK"];
countries = ["India", ...countries];

console.log(countries);

// clsoe but not use reference

let arr = [1,2,3];
console.log(arr);
let arr2 = [...arr];
console.log(arr2);