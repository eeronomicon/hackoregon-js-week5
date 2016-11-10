(function(exports) {
var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


exports.name = function(number) {
return names[number];
};
exports.number = function(name) {
return names.indexOf(name);
};
})(this.weekDay = {});


console.log(weekDay.name(weekDay.number("Saturday"))); // Saturday

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
