// Assignment-12
/* Greetings: Start with the array you used in 
Exercise 11, but instead of just printing each 
person’s name, print a message to them. The 
text of each message should be the same, but 
each message should be personalized with the 
person’s name. */

// step-01
let frndsNames = ["Faizan", "Qasim", "Shawan"];

// step-02
frndsNames.splice(1, 0, "Hi! I am learnig code");
console.log(frndsNames);

// step-03
frndsNames.splice(3, 0, "Hi! I am learnig code");
console.log(frndsNames);

// step-04
frndsNames.splice(5, 0, "Hi!         I am learnig code");
console.log(frndsNames);