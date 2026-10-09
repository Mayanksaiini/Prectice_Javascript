// // // Using Scope methods

// // /* Var */

// // var x = 10;// Not blocked scoped so we can access var outside the block it mean var= 20 is a assigned value 

// // {
// //     var x = 20;
// // }

// // console.log(x);


// // /* let */

// // let health = 100;

// // {
// //     let damage = 20;// blcoked scope this will not access outside the block 
// // }

// // console.log(damage);

// //nested block scope
// let score = 10;

// {
//     let score = 20;

//     {
//         let score = 30;
//         console.log(score);
//     }

//     console.log(score);
// }

// console.log(score);


// Real Game Example

// let playerHealth = 100;

// if (playerHealth > 0) {
//     let enemyDamage = 25;
//     playerHealth = playerHealth - enemyDamage;

//     console.log(playerHealth);
// }

// console.log(playerHealth);
// console.log(enemyDamage);

// inner block can access value from outer

// let health = 100;

// {
//     console.log(health);// (This can be access bny outer variables)
// }

// let score = 100;

// {
//     score = 200; // (This can be access bny outer variables)
// }

// console.log(score);

let weapon = "Sword";

{
    let damage = 100;

    console.log(weapon); // accessed by outer variables
    console.log(damage);
}
