// Difference Between Pass by value and Pass by reference

// There are 2 types of data types 

/*

 1. Primitive
 2. Objects

  */

// Primitive Data types referse pass by value

// Example

let first = 10;
let second = first;

first = 20;

console.log(first, second); // Output will be 20 & 10

// Now we know that primitive data types referse the copy of the value thats why after changing the value of first variable second value does not effect



// Objects Data types referse pass by reference

// Example

let firstObject = {name: "Noman"};
let secondObject = firstObject; // Assigning the first object reference or memory address to the second object.

secondObject.name = "John Cena";

console.log(firstObject.name); // Output John Cena not Noman

// but if we assign a new object to the first object the referece of both object will be change

firstObject = {name: "The rock"}; // Assign the new object to the first variable thats why now both objects has the different values.

console.log(firstObject); // Output is The rock
console.log(secondObject); // Output is John Cena


// Now we know that Objects does not copy its value they copy his memory space allowcated by the system and depend on a single address.

// Another Example in functions

const MyObject = {
  age: 20
}

function doSomething(age) {
  return age.age += 1;  // This line adding 1 in age;
}

console.log(doSomething(MyObject)); // Output will be 21


console.log(MyObject.age); // Age is increament 20 => 21


// In this function we pass the reference of the object and increament the value of original value of object


// What happend if we pass a primitive data type on the object as a argument?

let Dollar = 0

function IncreamentMoney(money) {
  return money += 1
}

console.log(IncreamentMoney(Dollar)); // This function increament value of Dollar

console.log(Dollar); 

// The original value does not effect because primitive data types copy its a value not a reference thats why global variable does not effect
