"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// Print a message to each of the two people still on your list, letting them know they’re still invited.
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have 
//an empty list at the end of your program.
//Excersice 17 
let guest_name = ['imran khan', 'waseem badami', 'rabiya anum'];
const message = "it is your pleasure to invite you in our dinner ! ";
const new_message = "sorry you are not invited in today dinner";
let absent_guest = "imran khan";
let new_guest = "Allama Iqbal";
guest_name[0] = new_guest;
for (let i = 0; i < guest_name.length; i++) {
    console.log(message + guest_name[i]);
}
console.log(`${absent_guest} is not coming to the dinner`);
console.log("good news we find big table so we are inviting  three more guest");
guest_name.unshift("hiba bukari");
guest_name.splice(2, 0, 'maryam nawaz');
guest_name.push('daniyal nagori');
for (let i = 0; i < guest_name.length; i++) {
    console.log(message + guest_name[i]);
}
//
console.log("\nsorry we can not arrange big table, only two people will be invited.");
while (guest_name.length > 2) {
    let remove_guest = guest_name.pop();
    console.log(new_message + remove_guest);
}
for (let i = 0; i < guest_name.length; i++) {
    console.log(message + guest_name[i]);
}
guest_name.splice(0, 2);
console.log(guest_name);
