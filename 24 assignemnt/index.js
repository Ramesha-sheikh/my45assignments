"use strict";
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
// Tests using the lower case function
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//Tests using "and" and "or" operators
//Test whether an item is in a array
// Test whether an item is not in a array
// Tests for equality and inequality with strings
console.log("equality  with strings", "car" == "car");
console.log("inequality with strings", "car " != "CAR");
//• Tests using the lower case function
console.log(" lower case function", "RAMESHA".toLowerCase() == "ramesha");
//• Numerical tests involving equality and inequality
console.log(" tests involving  inequality", 12 !== 20);
//• Numerical tests involving equality and inequality
console.log(" tests involving  inequality", 12 === 12);
//greater than
console.log(" tests greater ", 20 > 15);
//greater than or equal to
console.log("tests greater than or equal to", 20 >= 15);
//and less than or equal to
console.log(" tests and less than or equal to", 15 <= 20);
//inequality conditions 5
//and less than or equal to
console.log(" tests and less than or equal to", 20 <= 15);
//greater than or equal to
console.log("tests greater than or equal to", 15 >= 20);
//• Numerical tests involving equality and inequality
console.log(" tests involving  inequality", 12 !== 12);
//greater than
console.log(" tests greater ", 20 > 30);
//less than
console.log(" tests greater ", 40 < 30);
//• Tests using "and" and "or" operators
//"and" true  1
console.log(4 == 4 && 10 > 9);
//"and" true  
console.log(4 <= 4 && 10 > 9);
//"and" false  1
console.log(4 == 4 && 10 > 10);
//"and" false  
console.log(4 <= 4 && 10 < 9);
//"or" true  
console.log(4 <= 4 || 10 > 9);
//"or" true  
console.log(4 != 4 || 10 > 9);
//"or" false  
console.log(4 != 4 || 10 < 9);
//• Test whether an item is in a array
let guest_name = ["hira", "saba", "maha", "areeba"];
console.log("Test whether an item is in a array", guest_name.includes("maha"));
//• Test whether an item is not in a array
console.log("Test ramesha is not  a array", guest_name.includes("ramesha"));
