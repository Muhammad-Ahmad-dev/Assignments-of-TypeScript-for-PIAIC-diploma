// Assignment 16

/* More Guests: You just found a bigger dinner table,
so now more space is available. Think of three more
guests to invite to dinner. */

/* Start with your program from Exercise 15. Add a 
print statement to the end of your program informing 
people that you found a bigger dinner table. */
let peopleOnTable: string [];
peopleOnTable = ["Aras Khan", "Farhan Animator", "Saqib Javeed"];
let statement: string = "We found a bigger dinner table. I am going to invite three more people. Now I\'ve invited six people:";
console.log(statement);

// Add one new guest to the beginning of your array. //
 
peopleOnTable.unshift("Shawan Hassan");

// Add one new guest to the middle of your array. //
peopleOnTable.splice(2, 0, "Muhammad Faizan");

/* Use append() to add one new guest to the end of 
your list. */
peopleOnTable.push("Qasim Jutt");

/* Print a new set of invitation messages, one for 
each person in your list. */
console.log(peopleOnTable[0] + "! You\'re invited to a dinner today.");
console.log(peopleOnTable[1] + "! You\'re invited to a dinner today.");
console.log(peopleOnTable[2] + "! You\'re invited to a dinner today.");
console.log(peopleOnTable[3] + "! You\'re invited to a dinner today.");
console.log(peopleOnTable[4] + "! You\'re invited to a dinner today.");
console.log(peopleOnTable[5] + "! You\'re invited to a dinner today.");
