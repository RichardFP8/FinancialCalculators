"use strict";

//collect inputs
var principal = 80000;
var interest = parseFloat(5);                           //express as percenage and annually rate
interest = ((interest / 100) / 12).toFixed(5);           //converted to decimal interest rate yearly is converted to monthly

var length = 10;        // express as years, convert to months
length *= 12;           //converted to # of months

//compute in three steps for me to understand and track potential errors
 console.log(interest);
console.log(length);
var first =  (Math.pow( 1 + interest , length ) ) .toFixed(5) ;
var second = (1 + interest) ** length;
console.log(first);
console.log(second.toFixed(5));


// var second = Math.pow((1 + interest), length - 1);
// var monthly = principal * (first/second);

// console.log(first);
// console.log(second);
// console.log(monthly);