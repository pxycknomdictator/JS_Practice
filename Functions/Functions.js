/* what is functions in Js
Functions is very usefull component in js that can help us to write repeated value or data multiple times 

    Basic function*/
console.log("Functions in Js");

function myInfo() {
    let jab = 'hello world'
    return jab
}
const pri = myInfo()
console.log(pri)

// Parameter Functions
console.log("Function with parameter in Js");

function firstFun(num, num1, num2) {
    let a = console.log(num + "don't " + num1 + num2);
    return a;
}
firstFun('I ', 'like ', 'Bullies');


// firstFun(78, 90, 67);

// Functions in Js with return
console.log("function with parameters and return");

function percentage(num1, num2, num3) {
    let a = num1 / num2 * num3;
    return a;
}
let b = percentage(420, 550, 100);
console.log("Print the percentage:- " + b);



// Arrow functions in JavaScript
// In arrow function we dont need to write a function name we can store function is variable;


const func = (value, value2, value3) => {
    let calout = value / value2 * value3
    if (calout < 30) {
        console.log('You are fail in exam')
    } else if (calout >= 50 && calout < 70) {
        console.log('You are pass in exam')
    } else {
        console.log('You are genious')
    }
    return calout;
}
let printout = func(147, 200, 100)
console.log(printout)


