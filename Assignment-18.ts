// Assignment 18
/* Seeing the World: Think of at least five places in 
the world you’d like to visit. */

/* 1. Store the locations in a array. Make sure the 
array is not in alphabetical order. */
let locations: string [];
locations = ["Bora Bora, French Polynesia", "Amalfi Coast, Italy", "Great Barrier Reef, Australia", "Cataratas del Iguazu, Argentina", "Northern Lights, Norway"];

// 2.Print your array in its original order. //
console.log(locations);

/* 3. Print your array in alphabetical order without 
modifying the actual list. */
let sortedLocations:string [] = locations.slice();
sortedLocations.sort();
console.log(sortedLocations);

/* Show that your array is still in its original order 
by printing it. */
sortedLocations = locations;
console.log("The is still in its original order:")
console.log(sortedLocations);

/* Print your array in reverse alphabetical order 
without changing the order of the original list. */
let reversedLocations:string [] =  locations.slice();
reversedLocations.reverse();
console.log(reversedLocations);

/* Show that your array is still in its original order 
by printing it again. */
reversedLocations = locations;
console.log("The is still in its original order:")
console.log(reversedLocations);

/* Reverse the order of your list. Print the array to 
show that its order has changed. */
let reverseOrderList:string [] = locations.slice();
reverseOrderList.reverse(); 
console.log("The list order has changed:")
console.log(reverseOrderList); 

/* Reverse the order of your list again. Print the list
to show it’s back to its original order. */
reverseOrderList.reverse();
console.log("The list is back to its original order:");
console.log(reverseOrderList);

/* Sort your array so it’s stored in alphabetical order.
Print the array to show that its order has been 
changed. */
let sortArray:string [] = locations.slice();
sortArray.sort();
console.log("The list have been changed:");
console.log(sortArray);

/* Sort to change your array so it’s stored in reverse
alphabetical order. Print the list to show that its 
order has changed. */
sortArray.reverse();
console.log("The list order has changed:");
console.log(sortArray);