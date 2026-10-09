// #1 Primitives

console.log(" Q1----- Primitives")
let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);

// #2 Refrence 

console.log(" Q2----- Refrence")
let user1 = {
    name: "Mayank"
}

let user2 = user1;

user2.name = "Darkseid";
console.log(user1.name);
console.log(user2.name);

// #3Dynamic typing

console.log(" Q3----- Dynamic typing")
console.log("5" + 2); //string
console.log("5" - 2); //number
console.log("5" * 2);//number

// #4 Typeof function
console.log(" Q4-----typeof")
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});
console.log(typeof "");

// #5
console.log("Q5------");
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean(0));
console.log(Boolean([]));
console.log(Boolean({}));

// #6

console.log("Q6------");

let value;

console.log(value);
console.log(typeof value);


// #7
console.log("Q7------");
let x = "10";

console.log(x + 5);
console.log(Number(x) + 5 );

// #8

console.log("Q8------");
if ("false"){
    console.log("YES");
} else{
    console.log("NO");
}

// #9
console.log("Q9------");
let x1 = null; // null as false 

if (x1){
    console.log("A");
}else {
    console.log("B");
}

// #10
console.log("Q10------");
console.log(typeof NaN);
console.log(Boolean(NaN));
console.log(typeof 10n);
console.log(Boolean(" "));






