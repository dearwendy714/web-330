// Load additional JavaScript file
var header = require("../header.js");

// Outputs the header to the console
console.log(header.display("Wendy", "Portillo", "Exercise 3.2") + '\n');

/*
============================================
 Title:  Portillo-exercise-1.3.js
 Author: Wendy Portillo
 Date:   August 21, 2019
 Description: Exercise 3.2-The Factory Pattern
===========================================
*/

// start program

// creating my Oracle class constructor
function Oracle (properties){
  this.username = properties.username;
  this.password = properties.password;
  this.server = properties.server;
  this.version = properties.version;
}

// creating my Informix class constructor
function Informix (properties){
  this.username = properties.username;
  this.password = properties.password;
  this.server = properties.server;
}


function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7
}

function DatabaseFactory() {}


// modified the createDatabase if statement to include my new class constructors
DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
  if (properties.databaseType === "Postgres") {
      this.databaseClass = Postgres;
  } else if(properties.databaseType === "Oracle") {
      this.databaseClass = Oracle;
  } else if(properties.databaseType === "Informix") {
    this.databaseClass = Informix;
  }
  else {
      this.databaseClass = MySql;
  }

  return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: 'MySQL',
  username: "default",
  password: "password"
});
// creating my oracleFactory prototype function with the assigned values
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: 'oracle',
  username: "default",
  password: "password"
});
// creating my informixFactory prototype function with the assigned values
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: 'informix',
  username: "default",
  password: "password"
});
// outputing the results of the informix and oracle functions
//console.log(informix);
//console.log(oracle);
console.log(oracle instanceof Oracle);
console.log(oracle);
console.log(informix instanceof Informix);
console.log(informix);



// end program



