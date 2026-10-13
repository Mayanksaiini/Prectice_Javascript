// Precice set on Primitives

console.log("Q1 Primitves  vs Reference");
let a = 10;
let b = a; // at that pint b has  taken the value of a = 10 ,
b = 20; // but now  we have assigned new value

let user1 = { score: 50 };
let user2 = user1;
user2.score = 100;

console.log(a);
console.log(b);
console.log(user1.score);
console.log(user2.score);

console.log("Q2 Dynamic typing");
let value = 100;
console.log(typeof value);
console.log(value);

value = "100";
console.log(typeof value);

value = false;
console.log(typeof value);
console.log(value);

console.log("Q3 String");
let name = "ddarkseid";
let score = 25;

console.log("Hello" + 5); //  + will convert name  into string 
console.log("score:" + score); // 
console.log(`Next score: ${score + 5}`);// this will work as additon operator 

console.log("Q4 Number & NaN");

let x = "10";
let y = 3;

console.log(x + y);
console.log(x - y);
console.log("hello" * 2);
console.log(typeof NaN);
console.log(10 / 0);


console.log("Q5 Number & NaN");
