"use strict";
//assignment 43
//Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names and one array
// with the Great added to each magician’s name.
// Define a function to modify a copy of the array of magicians by adding "the Great" to each magician's name
function make_great(magicians) {
    let modifiedMagicians = []; // Create a new array to store modified magician names
    for (let magician of magicians) {
        modifiedMagicians.push(`the Great ${magician}`);
    }
    return modifiedMagicians;
}
// Define a function to show the list of magicians
function show_magicians(magicians) {
    console.log("List of Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Main program
let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette"];
// Show the initial list of magicians
console.log("Initial List of Magicians:");
show_magicians(magicians);
// Make a copy of the magicians array and make them great
let greatMagicians = make_great([...magicians]); // Use spread operator to create a copy of the array
// Show the list of magicians after making them great
console.log("\nList of Magicians After Making Them Great:");
show_magicians(greatMagicians);
// Show that the original list of magicians remains unchanged
console.log("\nOriginal List of Magicians (Unchanged):");
show_magicians(magicians);
