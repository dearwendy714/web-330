// Load additional JavaScript file
var header = require("../header.js");

// Outputs the header to the console
console.log(header.display("Wendy", "Portillo", "Exercise 3.3") + '\n');
/*
============================================
 Title:  Portillo-exercise-1.3.js
 Author: Wendy Portillo
 Date:   August 21, 2019
 Description: Exercise 3.3-The Singleton Pattern
===========================================
*/

// Start program
// creating our singleton module, storing it in our variable, and instantiating it
var DatabaseSingleton = (function() {
  // creating  our local internal reference

  var instance;
  // function that initiates the object

  function createInstance() {
  var postgresDatabase = new Object("Database instance initialized!");
  return postgresDatabase;
  }

  // returning public properties and methods from our object

  return {
  getInstance: function() {
  if (!instance) {
  instance = createInstance();
  }
  return instance;
  }
  }
 })();

 // creating a function that stores both instances in separate variables, then logs the variables to the console to test the output

 function databaseInit() {
  var databaseInstance1 = DatabaseSingleton.getInstance();
  var databaseInstance2 = DatabaseSingleton.getInstance();
  console.log("One database instance? " + (databaseInstance1 === databaseInstance2));
 }
 databaseInit();

function databaseSingletonTest() {
  var database1 = DatabaseSingleton.getInstance();
  var database2 = DatabaseSingleton.getInstance();
  console.log("One database instance? " + (database1 === database2));
}
// calling the test function to log the output

databaseSingletonTest();
