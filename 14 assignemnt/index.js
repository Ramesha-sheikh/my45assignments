"use strict";
//Guest List: If you could invite anyone, living or deceased, to dinner, 
//who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
let guest_name = ['Imrankhan', 'waseem badami', 'Rabiya anum'];
const message = "You're invited to dinner at my place. It would be great to have you there! :";
for (let i = 0; i < guest_name.length; i++) {
    console.log(message + guest_name[i]);
}
