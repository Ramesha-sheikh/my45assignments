"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your 
//program informing people that you found a bigger dinner table.
// Add one new guest to the beginning of your array.
// Add one new guest to the middle of your array. • 
//Use append() to add one new guest to the end of your list. • Print a new set of invitation 
//messages, one for each person in your list.
//excersice 16 more guest invited
let guest_name = ['imran khan', 'waseem badami', 'rabiya anum'];
const message = "it is your pleasure to invite you in our party ! ";
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
