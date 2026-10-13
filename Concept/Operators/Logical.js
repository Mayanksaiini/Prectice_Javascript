// AND (Both conditions must be truthy)
let age = 22;
let hasID = true;

console.log(age >= 18 && hasID === true);
// OR At least one condition must be true.
let hasEmail = false;
let hasPhone = true;

console.log(hasEmail || hasPhone);

// NOT Reverses the truthiness of a value.
let isLoggedIn = true;

console.log(!isLoggedIn); // false