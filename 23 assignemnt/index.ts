//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//et car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//Look closely at your results, and make sure you understand why each line evaluates to True or False.
//Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.



//conditional statment.......... series
let car : string = "SUBARU";

//test #01
console.log("Is car === 'subaru'? I predict True.");
console.log(car === "SUBARU"); //value check

//test #02
console.log( "Is car == subaru'? I predict True.");
console.log(car == "SUBARU"); //value check


//test #03
console.log( "Is car != subaru'? I predict True.");
console.log(car != "honda"); //value check


//test #4
console.log( "Is car !== subaru'? I predict True.");
console.log(car !== "honda"); //value check

//test #5
console.log( "Is car == tolowercasr subaru'? I predict True.");
console.log(car.toUpperCase() == "SUBARU"); //value check


//false condition
//test #1
console.log( "Is car == subaru'? I predict false.");
console.log(car == "subrau"); //value check

//test #2
console.log( "Is car = bike'? I predict false.");
console.log(car == "bike"); //value check
//test #3
console.log( "Is car === subaru'? I predict false.");
console.log(car === "subrau"); //value check

//test #4
console.log( "Is car  == HONDA'? I predict false.");
console.log(car == "Honda"); //value check
//test #5
console.log( "Is car  <= HONDA'? I predict false.");
console.log(car <= "Honda"); //value check

