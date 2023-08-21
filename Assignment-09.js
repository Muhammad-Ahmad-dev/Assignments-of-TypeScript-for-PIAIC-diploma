"use strict";
// Assignment 10
/*Adding Comments: Choose two of the programs you’ve written,
and add at least one comment to each. If you don’t have
anything specific to write because your programs are too
simple at this point, just add your name and the current date
at the top of each program file. Then write one sentence
describing what the program does.*/
/*this program display a pop-up window which two prompt. In this
pop-up the user will check petrol in Pakistani ruppees*/
let petrolPrice = prompt("Check Todays Petrol Price") || "0";
// this code run pop-up window
let price = "279.59";
// this code is specify the actual price
// the follwing code is created by comparison operator
if (petrolPrice == price) {
    // this code verifying the price of petrol
    alert("The Price is true in PKR.");
    //  this alert will give vaild message to the user  
}
else {
    alert("The Price is fake in PKR.");
    // this will give invaild message to the user 
}
