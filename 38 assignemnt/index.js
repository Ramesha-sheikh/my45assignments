"use strict";
//assignment  38
//Cities: Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter 
//for the country a default value. 
//Call your function for three different cities, at least one of which is not in the default country.
function city(country, city) {
    console.log(`${city} is in ${country}.`);
}
let name1 = city("pakistan", "karchi");
let name2 = city("turkey", "Istambol");
let name3 = city("Paris", "France");
