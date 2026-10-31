// // Q1 Create an Object

// let Object_1 = {
//   name: "Webcame",
//   price: 1278,
//   inStock: 78,
//   age: 12,
//   city: "NewYORK",
// };

// // console.log(Object_1.name);
// // console.log(Object_1.price);
// // console.log(Object_1.inStock);

// // Q2 Given let key ='age' and an object with age: 22, print the age using the key variable.

// let key = "age";

// // console.log(Object_1.age); // with dot
// // console.log(Object_1[key]); // with brecket

// // Q3 Update a property change a user's city from Newyork to Delhi, then add acountry property.

// console.log(Object_1.city); // Newyork

// Object_1.city = "delhi"; // New value
// console.log(Object_1.city);

// // Nested Object (Create a student with an address object containing city and state. Print the state.)

// let student = {
//   name: "Matyank",
//   address: {
//     city: "aligarh",
//     state: "UP",
//   },
// };

// let print = student.address.state;

// console.log(print);

//  Q5 Destructuring (Extract name and age from an object into separate variables and print them.)

// let section = {
//   name: "Mayank",
//   age: 12,
//   amount: 78900,
// };

// let { name, age, amount } = section;

// console.log(name,age,amount);

// Q6 Loop through properties usefor...in to print every key and value in an object.

// let section = {
//   name: "Mayank",
//   age: 12,
//   amount: 78900,
// };

// for (let key in section) {
//   //   console.log(key);
//   console.log(key, section[key]);
// }

//Q7 Copy an object with spread syntax. Change a top-level property and confirm the original is unchanged.

let section = {
  name: "Mayank",
  age: 12,
  amount: 78900,
  address: {
    state: "UP",
  },
};

let copy = { ...section };

console.log(copy); // why default which i mentioned

//Adding new values

section.name = "Rishab";
section.address.state = "DElhi"; // changed because shallow copy can't avoid reference 
console.log(copy); // no change in  actuall object
