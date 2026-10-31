// 8. Computed Properties
// A computed property lets you use an expression or variable as an object's key.

// // Without computed properties:

// let key = "name";

// let user = {
//   key: "Mayank"
// };

// console.log(user.key); // Mayank

// With computed properties:
let key = "name";

let user = {
  [key]: "Mayank"
};

console.log(user.name); // Mayank
