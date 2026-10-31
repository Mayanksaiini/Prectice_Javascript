//5. Looping Through Objects

let user = {
  name: "Mayank",
  age: 22,
  city: "Aligarh",
};
// };
// // console.log(user);  simple method

// //For...in

// // for (let key in user) {
// //   console.log(key);
// //   console.log(user[key]);
// // }

// // B. Object.keys()
// // Returns an array containing the object's own enumerable string keys.

// let keys = Object.keys(user);

// console.log(keys);
// // ["name", "age", "city"]

// keys.forEach(function (key) {
//   console.log(key, ":", user[key], );
// });



// C. Object.entries()
// Returns an array of key-value pairs.


// let entries = Object.entries(user);

// console.log(entries);

// for (let [key, value] of Object.entries(user)) {
//   console.log(key, value); // thsi will print in destructuring way 
// }