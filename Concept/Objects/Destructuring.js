// 4. Object Destructuring
// Destructuring lets you extract properties from an object into variables.

// Without destructuring:

// let user = {
//   name: "Mayank",
//   age: 22,
//   city: "Aligarh",
// };

// let name = user.name;
// let age = user.age;

// console.log(age, name);

// with destructuring

// let user = {
//   name: "Mayank",
//   age: 22,
//   city: "Aligarh",
// };

// let { name, age } = user;

// console.log(user);

// //renaming

// let user = {
//   name: "Mayank"
// };

// let { name: userName } = user;

// console.log(userName); // Mayank


// The default is used when the property is undefined.
// Nested destructuring

let user = {
  name: "Mayank",
  address: {
    city: "Aligarh",
    phone:{
        number:"87812564"
    }
  }
};

let {
  address: { city },

} = user;

console.log(city); // Aligarh