'use strict'

var today = new date()
var hourNow = today.gethHours();
var greeting;

if (hourNow >18) {
    greeting = 'goodeveing!';
} else if(hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Welcome!';
} else {
    greeting = 'Welcome!';
}
  
document.write('<h3>' + greeting + '</h3>');
    