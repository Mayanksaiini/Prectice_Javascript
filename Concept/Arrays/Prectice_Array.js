// Q1.Create an array with 3 fruits and print the second fruit.

let fruits = ["banana", "guava", "apple"];
fruits.push("Mango"); //  in the ending
console.log(fruits);

fruits.unshift("leache"); // in the starting
console.log(fruits);

fruits.pop(); // remove from the last
console.log(fruits);

fruits.splice(2, 0, "kela"); // adding & removing from particular array
console.log(fruits);

fruits.sort();
console.log(fruits);

fruits.sort().reverse();
console.log(fruits);

let newfruits = fruits.slice(1, 4); // extracting new array
console.log(newfruits);
