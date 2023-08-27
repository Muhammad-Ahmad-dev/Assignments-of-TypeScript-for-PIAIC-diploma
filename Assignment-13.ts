// Assignment-13
/* Your Own Array: Think of your favorite mode 
of transportation, such as a motorcycle or a 
car, and make a list that stores several 
examples. Use your list to print a series of 
statements about these items, such as “I would 
like to own a Honda motorcycle.” */

// My favourite modes of transportation
let myfavTransportation: string[] = ["Jeep", "Motorbike", "Bicycle"];

// list to print a series of statements about these items
function statements(Transportation:string []): void {
    for(const mode of Transportation){
        console.log(`I would like to buy : ${mode === "Jeep" ? "RangeRover " : ""}${mode}`)
    }  
}

/* Use your list to print a series of statements about these 
items */
statements(myfavTransportation);




