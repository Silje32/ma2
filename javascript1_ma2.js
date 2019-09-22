//MODULE ASSIGNMENT 2 - LEVEL 1

//1. Create a function that displays prototypal inheritance

function Dog(){
    this.make = "Kira"
}

Dog.prototype.species = function () {

};

var Tara = new Dog();
Tara.species();



//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numbers = myNumbers.slice(4,5);
console.log(numbers);



//3. Delete the last number in the array that you created above.

var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myNumbers.pop ();




/* 4. Given the following paragraph, create a JavaScript function that changes
all mentions of strawberry to banana and strawberries to bananas: Strawberries
are a popular part of spring and summer diets throughout America. Mouths water
from coast to coast each spring, when small white blossoms start to appear on
strawberry bushes. They announce the impending arrival of the ruby red berries
that so many people crave. Ripe strawberries taste sweet and have only a slight
hint of tartness. They are also one of the healthiest fruits around. There are
countless recipes for the luscious red berry, but many people prefer to eat them
fresh and unaccompanied. */

var paragraph = "Strawberries are a popular part of spring and summer diets
throughout America. Mouths water from coast to coast each spring, when small
white blossoms start to appear on strawberry bushes. They announce the impending
arrival of the ruby red berries that so many people crave. Ripe strawberries
taste sweet and have only a slight hint of tartness. They are also one of the
healthiest fruits around. There are countless recipes for the luscious red berry,
but many people prefer to eat them fresh and unaccompanied.";

function swapText(text){
  var replaceStrawberries = text.replace(/strawberries/ig, "bananas");
  var replaceStrawberry = replaceStrawberries.replace(/strawberry/ig, "banana");
  return replaceStrawberry;
}
swapText(paragraph);




/* 5. Create an array and a button. The array should contain 4 football clubs names.
When the button is clicked, remove all elements out of the array that we just created.
There after add in 4 names of cars inside that array. Log it to the console. */

var footballClubNames = ["Brann", "Lillestrøm", "Viking", "Rosenborg"];

myArrayFunction = footballClubNames {
footballClubNames.splice(0,4)
footballClubNames.unshift ("Golf", "BMW", "Volvo", "Tesla");
return footballClubNames

};

console.log(myArrayFunction);



//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var persons = [
    {name: "Bob", age: 20 },
    {name: "Mary", age: 29 },
    {name: "Sarah", age: 31 },
]
var name = age.filter(function(name)) {
return (name.person === "Bob");

})
console.log(name);


//7. Create a simple function that logs the date.

var myDate = new Date();
console.log(myDate);
