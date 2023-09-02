// Assignment 17
/* Shrinking Guest List: You just found out that your
new dinner table won’t arrive in time for the dinner,
and you have space for only two guests. */

/* Start with your program from Exercise 16. Add a 
new line that prints a message saying that you can
invite only two people for dinner. */
console.log("Sorry! I can invite only tow people for dinner.");

/* Remove guests from your list one at a time until 
only two names remain in your list. Each time you pop
a name from your list, print a message to that person
letting them know you’re sorry you can’t invite them 
to dinner. */
let removeGuest:string [];
removeGuest = ["Shawan Hassan", "Aras Khan", "Muhammad Faizan", "Frahan Animator", "Saqib Javeed", "Qasim Jutt"];
//                   0               1                 2                3                  4             5        
console.log(removeGuest.pop() + " Sorry! I can\'t invite you to dinner.");

console.log(removeGuest.splice(4) + " Sorry! I can\'t invite you to dinner.");

console.log(removeGuest.splice(3) + " Sorry! I can\'t invite you to dinner.");

console.log(removeGuest.splice(2) + " Sorry! I can\'t invite you to dinner.");

/*  Print a message to each of the two people still on your list, 
 letting them know they’re still invited. */
console.log(removeGuest[1] + "! You are still invited to dinner." );
console.log(removeGuest[0] +  "! You are still invited to dinner.");

/* Remove the last two names from your list, so you have an empty list.
 Print your list to make sure you actually have an empty list at the 
 end of your program. */
removeGuest.splice(1);
removeGuest.pop();
console.log(removeGuest);

 

