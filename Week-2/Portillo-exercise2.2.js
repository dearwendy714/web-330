
/*
============================================
 Title:  Portillo-exercise-2.2.js
 Author: Wendy Portillo
 Date:   August 13, 2019
 Description: Prototypes
===========================================
*/
// Load additional JavaScript file
var header = require("../header.js");

// Outputs the header to the console
console.log(header.display("Wendy", "Portillo", "Exercise 2.2") + '\n');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

// creating my object literal which will return my age
var person = {

  getAge: function() {
      return this.age;
  }
}

// creating my new object literal which defines my full name and age
var wendy = Object.create(person, {

  "age":{
      "value": "29",
  },

  "fullname": {
      "value": "Wendy Portillo"
  }
});

// calling my getAge function
wendy.getAge();

// outputting the results
console.log('The person\s full name is ' + wendy.fullname);
console.log('The person\s age is ' + wendy.age);


// end program




