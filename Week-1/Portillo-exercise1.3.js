
/*
============================================
 Title:  Portillo-exercise-1.3.js
 Author: Wendy Portillo
 Date:   August 8, 2019
 Description: Class Refresher
===========================================
*/
// Load additional JavaScript file
var header = require("../header.js");

// Outputs the header to the console
console.log(header.display("Wendy", "Portillo", "Exercise 1.3") + '\n');

// Start program


function cellphone(manufacturer, color, price, model) {

  this.manufacturer = manufacturer;

  this.color = color;

  this.price = price;

  this.model = model

  this.getPrice = function() {
    return this.price;
  }

  this.getModel = function() {
    return this.model;
  }

  this.getDetails = function() {

    result = "Manufacturer: " + this.manufacturer + "\nColor: " + this.color + "\nPrice: " + this.getPrice() + "\nModel: " + this.getModel();
    return result;

  };

  }

  var cellphone = new cellphone("Apple", "silver" , "$500" , "X-iPhone");

  console.log(cellphone.getDetails())
