"use strict";
//assignment 32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Make a list of five or more usernames called current_users.
//Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//List of current usernames
const current_users = ['john', 'alice', 'bob', 'emma', 'chris'];
// List of new usernames
const new_users = ['Alice', 'john', 'mike', 'Sarah', 'Bob'];
// Loop through new_users to check uniqueness
for (const new_user of new_users) {
    // Convert both the new username and current usernames to lowercase for case-insensitive comparison
    const lowercase_new_user = new_user.toLowerCase();
    const lowercase_current_users = current_users.map(user => user.toLowerCase());
    // Check if the new username is already in use
    if (lowercase_current_users.includes(lowercase_new_user)) {
        console.log(`The username '${new_user}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username '${new_user}' is available.`);
    }
}
