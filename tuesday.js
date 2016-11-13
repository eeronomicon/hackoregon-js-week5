var isBrowser = function() {
  return (typeof window === 'undefined' || window === null ? false : true);
};

(function(exports) {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  exports.name = function(number) {
  return names[number];
  };
  exports.number = function(name) {
  return names.indexOf(name);
  };
})(typeof window === 'undefined' || window === null ? global.weekDay = {} : window.weekDay = {});

isBrowser() ? $("#outputAreaWeekDay").text(weekDay.name(weekDay.number("Saturday"))) : console.log(weekDay.name(weekDay.number("Saturday")));

(function(exports) {
  var names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  exports.name = function(number) {
  return names[number];
  };
  exports.number = function(name) {
  return names.indexOf(name);
  };
})(typeof window === 'undefined' || window === null ? global.month = {} : window.month = {});

(isBrowser() ? $("#outputAreaMonth").text(month.name(month.number("November"))) : console.log(month.name(month.number("November"))));


(function(exports) {
  var taxRate = 9;
  var inventory = [["Phone", 399.99], ["Accessory", 19.99]];

  exports.calcItemTotal = function(purchasePrice, taxRate) {
    return purchasePrice * (1 + (taxRate/100));
  };

  exports.printDollar = function(amount) {
    return "$" + amount.toFixed(2);
  };

  exports.withinBudget = function(amount, availableFunds, spendingThreshold) {
    return amount > availableFunds - spendingThreshold ? false : true;
  };

  exports.buyStuff = function(availableFunds, spendingThreshold) {
    var runningBalance = 0;
    var itemTotal = 0;
    var output = "";

    for (var i = 0; i < 2; i++) {
      while (this.withinBudget(runningBalance, availableFunds, spendingThreshold)) {
        itemTotal = this.calcItemTotal(inventory[i][1], taxRate);
        if (!this.withinBudget(runningBalance + itemTotal, availableFunds, spendingThreshold)) {
          break;
        } else {
          runningBalance += itemTotal;
          output += (inventory[i][0] + ' purchased for ' + this.printDollar(itemTotal) + ' (Current balance: ' + this.printDollar(runningBalance) + ')\n');
        }
      }
    }

    return "Available Funds: " + this.printDollar(availableFunds) + "\n" + "Spending Threshold: " + this.printDollar(spendingThreshold) + "\n" + output;
  }

})(typeof window === 'undefined' || window === null ? global.phoneApp = {} : window.phoneApp = {});

console.log(phoneApp.printDollar(phoneApp.calcItemTotal(100,9)));
console.log(phoneApp.withinBudget(phoneApp.calcItemTotal(499.99, 9), 1000, 300));
isBrowser() ? $("#phoneShopper").text(phoneApp.buyStuff(3000, 300)) : console.log(phoneApp.buyStuff(3000, 300));
