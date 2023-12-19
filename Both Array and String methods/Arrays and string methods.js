/* what is Arrays in JS
 Arrys is a collection of elements with the types number, strings, booleans and null
There are two ways to write arrays in JS

let a = new array("hello", "I am ", "array")
let b = [23, 43, 343, 53]
(In Js index number always start with 0 ( I dont know why but 0)) */

// We can change index or values in arrays but not in string index

console.log("Arrays and its methods in JavaScript");

let arr = [23,32,343,545,6565,7565];
let arr1 = ['windows','MacOs','kali_linux','Android','IOS'];
let print = arr1.join(' and ') 
console.log(print)

console.log(arr1.length)

arr1.shift();                  // Remove first value in array and provide new array

arr1.unshift("Windows");       // Add first value in array and provide new array

arr1.pop();                    // Remove last value of array and provide new array

arr1.push("Noman")
console.log(arr1)

let c = arr.concat(arr1)       // Add two or more string with each other
console.log(c)



// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])
// console.log(arr[6])
// console.log(arr[7])
// console.log(arr[8])

let brr = "Rimza";
console.log(brr.length)

// /* String methods(Properties) in JS
//  There are 16 types of strings methods in js some of there are as follows  
// {.length , toUpperCase(), toLowerCase(), slice(), trim(), replace(), concat(), trimstart(), trimend(), replaceAll(), charart(), charcodeart(), split(), substring(), substr(), padstart(), padend() }   */

console.log("Strings and its methods in JaveScript")

let str = "Noman";
let str1 = " is a good boy"
str1[2] = "Bad";
// str1 = "Bad"
// In string method we can not assign or change a string in this following example

console.log(str.concat(str1))
console.log(str1.length)            // length
console.log(str.toLowerCase())      // toLowerCase
console.log(str.toUpperCase())      // toUpperCase
console.log(str.slice(2))           // Slice

let dj = "     Mudassir      "
console.log(dj.trim())              // Trim

let jab = '      Khalid     ';
console.log(jab.trimStart());       // TrimStart
console.log(jab.trimEnd());         // TrimEnd

let rep = ('JavaScript is the most popular language you can make dynamic website by JavaScript');

// console.log(rep.replace(/JavaScript/g, 'PHP'));          // Replace globally
console.log(str1.replace("is a good boy", "Rimza"))         // Replace
console.log(rep.replaceAll('JavaScript', 'PHP'));           // ReplaceAll



