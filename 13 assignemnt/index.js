"use strict";
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, 
//such as “I would like to own a Honda motorcycle.”
let favorit_transportation = ['Dala', 'sportbike', 'aroplain', 'train', 'cycle'];
let message = "I would like to own a :";
for (let i = 0; i < favorit_transportation.length; i++) {
    console.log(message + favorit_transportation[i]);
}
