/* There are seven types of data types in Js are called Primitive data types
(nn bb ss u) 
null     -->  (null)
Number   -->  (78)
BigInt   -->  BigInt(789)
Boolean  -->  (true or false)
Symbol   -->  (Symbol)
String   -->  ("Noman")
undefined --> (undefined)     */
            console.log('THESE ARE CALLED DATA TYPES');

let a = null;
let b = 24;
let c = BigInt;
let d = true;
let e = Symbol;
let f = "string";
let g = undefined;

console.log(typeof a)      //we can also use typeof to find data types as well
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)

                // Non-Primitive data types or Objects
console.log("NON-PRIMITIVE DATA TYPES OR OBJECTS")
const info = {
    Name : "Noman",
    Father : "Noor zaman",
    Class : 12,
    group : "pre-engineering",
    Result : "Pass",
}
console.log(info);
console.log(info["Name"]);
console.log(info["Father"]);
console.log(info["Result"]);