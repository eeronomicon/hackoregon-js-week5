# hackoregon-js-week5
Hack Oregon JavaScript Fundamentals Week 5

## Month Names
Write a simple module similar to the weekDay module that can convert month numbers (zero-based, as in the Date type) to names and can convert names back to numbers. Give it its own namespace since it will need an internal array of month names, and use plain JavaScript, without any module loader system.
console.log(month.name(2)); // March
console.log(month.number("November")); // 10

## Phone Application
Turn your phone application from before into a module! We last left it wrapped in a function to hide the data. Now, fully module-ize it. Use what we’ve learned: Wrap your code in a module, expose the various helper functions as methods, and create your own JavaScript library.
If you’re using my example phone app, you’ll want to export three functions. The first two are obvious: the helper functions to add tax and print money amounts. For the last one, think about the other libraries we’ve looked at like Leaflet or Bootstrap. Those libraries don’t run any actual functionality when we execute the module IIFE. All they do is load the module into our global namespace so we can use it. You need to export the main functionality of the the phone app, for example phoneApp.buy(). Your module IIFE should not actually run the phone buying itself, just like when you use a library on a web page it only loads itself and you have to run the functionality yourself.

## Extra Credit!
You’ve probably noticed that in the browser you have to pass in window.moduleName or this.moduleName, but in Node you have to pass in global.moduleName. Modify your libraries so that the same code works both in the browser and in Node. You can test the browser part by copy/pasting into the devtools console of any Chrome window.
HINT: How do we test to see if something like window exists? It involves the typeof operator we’ve used before.
HINT #2: Ternary operators are super great for this sort of testing and picking a value on one line.

## Project 2: JavaScript Library
Create a little library for all the various odd functions we’ve created in class. Think of the Math object built into JavaScript. It’s a grab bag of all the various math-y things you might want to do. Make a similar “toolbox” for this class! When you’re done, you should be able to run classToolbox.countBs(); or classToolbox.isPrime() or classToolbox.reverseArray(). You can name your library whatever you want instead of classToolbox.
Your library should:
Run in both Node or when linked in the browser like any other library
Create it’s own namespace
Include data property(ies) containing your name, the current date, and something about created for Hack U
Include at least 8 of the functions that we’ve written in the exercises as methods
Include your choice of weekDay or month as a submodule
Include constructors for one prototype, such as Vehicle, Vector, or Student and Person
All methods and properties should be contained within the namespace created, such as in the examples above. Your module should use the “exports” convention like in slide #10 to keep things modular. This project is due November 15th at 6pm and will be graded pass/fail on completion. To turn it in, push it to GitHub as a repository. I already have your GitHub account names from last project, so you don’t need to do anything more to get it “turned in.”
