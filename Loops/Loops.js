/* Loops
Loops is the very important part of js because they can help us to print the value several times
There are several types of loops in js 
        (For, while, Do-while, For-in, For-of)
*/
// for-loop
        console.log("For loop");

for (let a = 0; a<=10; a++) {
    console.log(a);
}
// while loop
        console.log("while-loop")

let n = 0;
while(n<=90){
    console.log(n);
    n++;
}
// Do-while-loop
        console.log("Do-while-loop");

let h = 0;
do{
    console.log(h);
    h++;
} while(h<=10);


// For-in loop in js

        console.log("for-in loops in js")

const obj = {
        Name: "Noman",
        Father: "Noor zaman",
        class: 12,
        Subject: "computer science",
}
for (let key in obj) {
        console.log("Print the data of object = ", key, "is",  obj[key]);
}
// console.log("print data = " , obj["Name"]);

// for-of loops in js

        console.log("For-of loops in js");

let mydata = ['Noman','Subban','Jawad','Ali','Hassan'];

for(let data of mydata){
        console.log("Print my data = " , data);
}
