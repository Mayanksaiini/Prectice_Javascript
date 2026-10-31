// A shallow copy copies the outer object, but nested objects remain shared references.

// let original = {
//   name: "Mayank",
//   address: {
//     city: "Aligarh",
//   },
// };

// let copy = { ...original };

// copy.name = "Rahul"; // ADDITION
// copy.address.city = "Delhi"; // ADDITION

// console.log(original.name); // Mayank
// console.log(original.address.city); // Delhi (Reference properties will change but not main object 


// // D. Deep cloning with structuredClone()
// // For supported data types, structuredClone() creates a deep copy, including nested objects.


// let original = {
//   name: "Mayank",
//   address: {
//     city: "Aligarh"
//   }
// };

// let copy = structuredClone(original);

// copy.address.city = "Delhi";

// console.log(original.address.city); // Aligarh
// console.log(copy.address.city);     // Delhi

// structuredClone() supports many built-in data types, but it cannot clone everything, such as functions. It also cannot clone every kind of object in every situation.

// Remember:
// - { ...obj } → shallow copy.
// - Object.assign({}, obj) → shallow copy.
// - structuredClone(obj) → deep clone for supported values.

// 7. Optional Chaining (?.)
// Optional chaining safely accesses a property when an intermediate value might be null or undefined.

// let user = {};

// console.log(user.address.city);
// // TypeError: Cannot read properties of undefined

// let user1 = {};

// console.log(user1.address?.city); // undefined



// Optional chaining with arrays and functions
let user = {
  skills: ["JavaScript", "SQL"]
};

console.log(user.skills?.[0]); // JavaScript
console.log(user.skills?.[5]); // undefined


// For an optional function:
let user2 = {};

user.greet?.(); // Does nothing if greet is null or undefined

