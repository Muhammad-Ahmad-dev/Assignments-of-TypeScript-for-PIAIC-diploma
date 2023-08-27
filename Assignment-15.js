"use strict";
// Assignment 15
/* Changing Guest List: You just heard that one of
your guests can’t make the dinner, so you need to
send out a new set of invitations. You’ll have to
think of someone else to invite */
/* Start with your program from Exercise 14. Add a
print statement at the end of your program stating
the name of the guest who can’t make it. */
let changingGuestList;
changingGuestList = ["Aras Khan", "Farhan Animator", "Ahmad Fareed"];
console.log(changingGuestList[2] + " isn\'t coming to the dinner.");
/* Modify your list, replacing the name of the guest
who can’t make it with the name of the new person
you are inviting. */
changingGuestList.pop();
changingGuestList.push("Saqib Javeed");
// console.log(ChangingGuestList); //
/* Print a second set of invitation messages, one for
 each person who is still in your list. */
let invitationMessage = "You\'re invited for a dinner at the next Sunday.";
console.log(changingGuestList[0] + "! " + invitationMessage);
console.log(changingGuestList[1] + "! " + invitationMessage);
console.log(changingGuestList[2] + "! " + invitationMessage);
