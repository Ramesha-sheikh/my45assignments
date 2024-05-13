"use strict";
//assignment 44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//using a different number of arguments each time.
function makeSandwich(items) {
    return `Your sandwich includes: ${items.join(", ")}`;
}
let collection1 = makeSandwich(["cheezy", "lettuce", "Egg"]);
let collection2 = makeSandwich(["Turkey", "Bacon", "onion"]);
let collection3 = makeSandwich(["Ham"]);
console.log("First Sandwich:");
console.log(collection1);
console.log("\nSecond Sandwich:");
console.log(collection2);
console.log("\nThird Sandwich:");
console.log(collection3);
