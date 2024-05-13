//assignment 39
//City Names: Write a function called city_country() that takes in the name of a
// city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(country: string ,city :string):string{
    return (`${city} is in ${country}.`)}
let name1 = city_country("pakistan","karchi");
let name2 = city_country("turkey","Istambol");
let name3 =city_country("Paris","France");
console.log(name1);
console.log(name2);
console.log(name3);

