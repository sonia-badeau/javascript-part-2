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
//console.log(myArray.sort(compare));


//Create an array of objects (don’t need to use new here, just regular object literals). 
//These objects will contain a name and email property. 
//Then, run some code that will sort your array by the longest name. 
//Then, run some code that will sort your array by e-mail address in alphabetical order.

var person = [
    {name: "Sonia", email: "sonia@gmail.com"},
    {name: "Ste", email: "ste@gmail.com"},
    {name: "Ro", email: "ro@gmail.com"},
    ];
function compareLength(obj1, obj2) {
    return obj1.name.length - obj2.name.length
}
//console.log(sorted[0]);
var sorted = person.sort(compareLength);


//Create a function that can be used with Array.prototype.map. 
//This function should take a number and return its square. 
//Then, use this function with map on an array of numbers to check the result.

function returnSquare(number){
    return number * number;
}

var numbers = [1, 4, 7, 9, 5];
var newArray = numbers.map(returnSquare)

var secondArray = numbers.map(function(i){
    return i + i;
})

//console.log(secondArray);

//console.log(newArray);

//Create a function that can be used with Array.prototype.map. 
//This function should be able to take an object and square its “num” property. 
//Then, use this function with map on an array of objects each containing a “num” property.

var numObj = [
    {name: "Eight", num: 8},
    {name: "Five", num: 5},
    {name: "Ten", num: 10}
    ];
function multiply (obj) {
    return obj.num * obj.num;
}
var square = numObj.map(multiply);
//console.log(square);
// map acts like a loop. It creates a new array 

//Here we are going to do the same but at a higher order. 
//Create a function called operationMaker that takes only a string called operation as argument. 
//This string could be “add”, “subtract”, “mult” or “div”. 
//Your function will return a function that will take two numbers and return the result of running operation on these numbers.

function operationMaker(operation) {
    switch(operation) {
  case 'add':
      return function adder(a,b) {
          return a + b;
      }
      
  case 'subtract':
      return function subtracter(a,b) {
          return a - b;
      }
  
  case 'mult':
      return function multiplier(a,b) {
          return a * b;
      }
      
  case 'div':
      return function divider(a,b) {
          return a / b;
      }
      
  default:
      console.log("Bad operation!");
   };
   
}

console.log(operationMaker("add")(5,10));
console.log(operationMaker("subtract")(5,10));
console.log(operationMaker("mult")(5,10));
console.log(operationMaker("div")(5,10));
