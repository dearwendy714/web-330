
/*
============================================
 Title:  Portillo-exercise-1.4.js
 Author: Wendy Portillo
 Date:   August 8, 2019
 Description: Duck Typing
===========================================
*/
// Load additional JavaScript file
var header = require("../header.js");

// Outputs the header to the console
console.log(header.display("Wendy", "Portillo", "Exercise 1.3") + '\n');

// Start program
function Car(model) {
 this.model = model;

}
Car.prototype.start = function() {
 console.log("Car added to the race track!");
};
function Truck(model, year) {
 this.model = model;
 this.year = year;

}
Truck.prototype.start = function() {
 console.log("Truck added to the race track!");
};
function Jeep(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;

}
Jeep.prototype.start = function() {
 console.log("Jeep added to the race track!");
};
var car1 = new Car("VW Passat");
var car2 = new Truck("Toyota", "2002");
var car3 = new Jeep("Cherokee", 2019, "grey");
var raceTrack = [];
function driveIt(vehicle) {
vehicle.start();
 raceTrack.push(vehicle);
}
driveIt(car1);
driveIt(car2);
driveIt(car3);
// Display shopping cart
console.log("\n-- The following items have been added to your shopping cart --");
for (var k = 0; k < raceTrack.length; k++) {
 console.log(raceTrack[k].constructor.name + ": " + raceTrack[k].model);
}
