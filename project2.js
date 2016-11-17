"use strict";

(function(exports) {

  exports.projectName = "classToolBox";
  exports.createdFor = "Created for Hack Oregon's JavaScript Fundamentals class";
  exports.createdBy = "Humbly hand-crafted by HK Kahng";
  exports.createdOn = "Coded in November 2016";

  exports.isBrowser = function() {
    return (typeof window === "undefined" || window === null ? false : true);
  };

  exports.monthName = function(number) {
    let names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return names[number - 1];
  };

  exports.assignGrade = function(score) {
    if (score <= 60) {
      return "F";
    } else if (score < 70) {
      return "D";
    } else if (score < 80) {
      return "C";
    } else if (score < 90) {
      return "B";
    } else {
      return "A";
    }
  };

  exports.fizzBuzz = function(number) {
    let returnString = "";
    for (let i = 1; i <= number; i++) {
      if (i % 15 === 0) {
        returnString += "fizzbuzz | ";
      } else if (i % 5 === 0) {
        returnString += "buzz | ";
      } else if (i % 3 === 0) {
        returnString += "fizz | ";
      } else {
        returnString += i + " | ";
      }
    }
    return returnString;
  };

  exports.isPrime = function(inputNumber) {
    if (inputNumber <= 0) {
      return false;
    } else if (inputNumber === 2 ) {
      return true;
    } else {
      for (let i = 2; i <= Math.sqrt(inputNumber)/2; i++) {
        if (inputNumber % i === 0) {
          return false;
        } else {
          return true;
        }
      }
    }
  };

  exports.library = [
    {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
    },
    {
      author: 'Walter Isaacson',
      title: 'Steve Jobs',
      readingStatus: true
    },
    {
      author: 'Suzanne Collins',
      title:  'Mockingjay: The Final Book of The Hunger Games',
      readingStatus: false
  }];

  exports.readingList = function(library) {
    let outputString = "";
    library.forEach(function(book) {
      outputString += (book.readingStatus ? "I am currently reading " : "I have yet to read ");
      outputString += book.title + " by " + book.author + '\n';
    });
    return outputString;
  };

  let Vehicle = function(type, line, lat, long, speed, full, vehicleNumber, late) {
    this.type = type;
    this.line = line;
    this.lat = lat;
    this.long = long;
    this.speed = parseInt(speed);
    this.full = full;
    this.vehicleNumber = parseInt(vehicleNumber);
    this.late = parseInt(late);
  };

  Vehicle.prototype.displayInfo = function() {
    let returnArray = [];
    returnArray.push(this.type);
    returnArray.push(this.line);
    returnArray.push([this.lat, this.long]);
    return returnArray;
  };

  Vehicle.prototype.updateLatLong = function(newLat, newLong) {
    this.lat = newLat;
    this.long = newLong;
  };

  exports.Vehicle = Vehicle;

  exports.Vector = function(x, y) {
    this.x = x;
    this.y = y;
  };

  exports.Vector.prototype.plus = function(vector) {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  };

  exports.Vector.prototype.minus = function(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
    return this;
  };

})(typeof window === "undefined" || window === null ? global.classToolBox = {} : window.classToolBox = {});


console.log(classToolBox.projectName);
console.log(classToolBox.createdFor);
console.log(classToolBox.createdBy);
console.log(classToolBox.createdOn);
console.log("Is this a browser? " + classToolBox.isBrowser());
console.log(classToolBox.monthName(10));
console.log("A score of 95 gets a grade of " + classToolBox.assignGrade(95));
console.log(classToolBox.fizzBuzz(45));
console.log("Is 201 a Prime Number? " + classToolBox.isPrime(201));
console.log(classToolBox.readingList(classToolBox.library));

let busLine12 = new classToolBox.Vehicle("Bus", "12", -122.2, 45.52, 30, false, 1520, 2);
console.log(busLine12.displayInfo(busLine12.updateLatLong(-122.4, 45.56)));
console.log(new classToolBox.Vector(1, 2).minus(new classToolBox.Vector(2, 3)));
console.log(new classToolBox.Vector(1, 2).plus(new classToolBox.Vector(2, 3)));
