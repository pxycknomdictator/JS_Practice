/* There are seven types of data types in Js are called Primitive data types
(nn bb ss u) 
null     -->  (null)
Number   -->  (78)
BigInt   -->  BigInt(789)
Boolean  -->  (true or false)
Symbol   -->  (Symbol)
String   -->  ("Noman")
undefined --> (undefined)     */
console.log("THESE ARE CALLED DATA TYPES");

let a = null;
let b = 24;
let c = BigInt;
let d = true;
let e = Symbol;
let f = "string";
let g = undefined;

console.log(typeof a); //we can also use typeof to find data types as well
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

// Non-Primitive data types or Objects
console.log("NON-PRIMITIVE DATA TYPES OR OBJECTS");
const info = {
  Name: "Noman",
  Father: "Noor zaman",
  Class: 12,
  group: "pre-engineering",
  Result: "Pass",
};
console.log(info);
console.log(info["Name"]);
console.log(info["Father"]);
console.log(info["Result"]);

const user_information = Object.freeze({
  name: "Noman",
  age: 90,
});

// user_information["name"] = "John Doe" // I can't do that because this object is freeze

// what happened if i want to access values of an object in the form of array?

Object.values(user_information); // this will return ["Noman", 90]

// so what about keys?

Object.keys(user_information); // this will return ["name", "age"]
