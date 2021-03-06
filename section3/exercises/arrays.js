/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/


//-------------------
// PART 1: Animals: Array Syntax
//-------------------

// EXAMPLE: write code below that will log an array of animals.
// Store the array in a variable.
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals);

// EXAMPLE: Write code below that will log "Zebra" from the animals array
// YOUR CODE HERE
console.log(animals[0]);

// YOU DO: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals.length);

// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"
animals[2] = "Gorilla";

// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals.push("Snail");

// YOU DO: Write code that will log the String "Elephant" in the animals array
animals.unshift("Elephant");
console.log(animals[0]);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foods = ["donut", "beans", "eggs", "butter"];

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(foods.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
foods.unshift("broccoli");
console.log(foods);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
foods.pop();
console.log(foods);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
foods.push("cookie", "ham", "miso");
console.log(foods);

// YOU DO: Remove the food that is in index position 0.
foods.shift();

//-------------------
// PART 3: Where are Arrays used?
//-------------------

/*
Sometimes we need to hold on to multiple pieces of data, but have it grouped together in a list.
This is why programming languages have arrays!

One example of a web/mobile application that uses arrays is Instagram. Each user has a set of posts
associated with their account. Each post, is one of potentially many, that are grouped together in a list,
or, array.

The post itself likely has more complex data, but here's one way we can think about it:
*/

var posts = ["image at beach", "holiday party", "adorable puppy", "video of cute baby"];

// YOU DO: Think of a web application you commonly use. Where do you see LISTS utilized, where arrays
// may be storing data? Come up with 3 examples - they could be from different web applications or
// all from the same one.

// 1: In the New York Times crossword app, there are lists used for the different "packs" of crossword
// puzzles, grouped by themes. For example, there is a pack of puzzles with a "Broadway Musicals" theme.

// 2: I have made many playlists in Spotify. Not only are the playlists IN a list, but each playlist is
//list in itself, with ordered songs.

// 3: My astrology app, Co-Star, has two lists generated every day for the user. One is a list of "dos"
// and the other is a list of "don'ts". These suggestions are supposedly informed by the position of the
// stars. Today's list probably looks like: doList = ["Beach house", "Phone speakers",
// "Candlelight"];


//-------------------
// Part 4: Don't let yourself forget everything from Section 2 of Pre-work
//-------------------

/*
YOU DO:
Using the variables defined below, write a program that will tell a user if they
will be able to call an Uber.

The user can call an uber if they have 15% battery remaining, or more. In this case, it doesn't matter
if the user has a charger at all, or what type.
The can call an uber if they have a charger and it is a car charger.

*/
var percentBatteryLeft = 12;
var hasCharger = true;
var chargerType = "wall";

// Write your conditional here
//Write if statement with initial condition of percentBatteryLeft. If percentBatterLeft is >= 15, log to user to call uber.
if (percentBatteryLeft >= 15) {
  // write log statement to user if condition above is met.
  console.log("Call that uber, bud.")

  // Create second condition for user. If percentBatteryLeft is less than 15, this conditional will run.
  // This else if statement determines whether the user has a charger, and if that is true, considers the
  // charger type. If the charger type is "car", the statement will evaluate to true, and a log statement
  // will run.
} else if (hasCharger === true && chargerType === "car") {

  //Write log statement that will alert user to call uber after above conditions are met.
  console.log("Call the uber and save those feet!")

  //Create a default condition if previous two statements evaluate to false as an else statement.
} else {

  //Alert the user that they will not call an uber tonight.
  console.log("Looks like we're hoofing it tonight.")
  //close if statement bracket
}

// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
