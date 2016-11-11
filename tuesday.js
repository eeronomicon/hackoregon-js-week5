(function(exports) {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  exports.name = function(number) {
  return names[number];
  };
  exports.number = function(name) {
  return names.indexOf(name);
  };
})(this.weekDay = {});

$("#outputAreaWeekDay").text(weekDay.name(weekDay.number("Saturday")));

(function(exports) {
  var names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  exports.name = function(number) {
  return names[number];
  };
  exports.number = function(name) {
  return names.indexOf(name);
  };
})(this.month = {});

$("#outputAreaMonth").text(month.name(month.number("November")));


(function(exports) {
  var taxRate = 9;
  var inventory = [["Phone", 399.99], ["Accessory", 19.99]];
  var runningBalance = 0;
  var itemTotal = 0;
  var output = "";

  exports.calcItemTotal = function(purchasePrice, taxRate) {
    return purchasePrice * (1 + (taxRate/100));
  };

  exports.printDollar = function(amount) {
    return "$" + amount.toFixed(2);
  };
  
})(this.phoneApp = {});
