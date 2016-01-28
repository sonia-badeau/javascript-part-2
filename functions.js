//Read about the Array.prototype.sort method. Create a function that can be used with sort. 
//This function should take two strings, and return a value that sort can use to determine which is the longest string. 
//Finally, create an array of strings and try to get it sorted using your new function.

var string1 = "Montreal";
var string2= "Paris";

function compare (string1, string2) {
    
    if (string1.length < string2.length) {
     return -1;
    }
    if (string1.length > string2.length) {
     return 1;
    }
  return 0;
}

compare(string1, string2);


var myArray = ["flat", "studio", "appartment", "home"];
console.log(myArray.sort(compare));


//Create an array of objects (don’t need to use new here, just regular object literals). 
//These objects will contain a name and email property. 
//Then, run some code that will sort your array by the longest name. 
//Then, run some code that will sort your array by e-mail address in alphabetical order.

var person = [
    {name: "Sonia", email: "sonia@gmail.com"},
    {name: "Steph", email: "stehp@gmail.com"},
    {name: "Robin", email: "robin@gmail.com"},
    ];

function compare (obj1, obj2) {
    
    if (name.length < email.length) {
     return -1;
    }
    if (name.length > email.length) {
     return 1;
    }
  return 0;
}




//Create a function that can be used with Array.prototype.map. 
//This function should take a number and return its square. 
//Then, use this function with map on an array of numbers to check the result.

var myArray = ["flat", "studio", "appartment", "home"];

