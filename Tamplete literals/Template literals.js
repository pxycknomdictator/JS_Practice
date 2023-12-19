// Today we discuss practically what is template literals in JS

console.log('Template literals in js')
/* How template literials works?
  First step:-  (2) variables banao or us m strings ko store krdo
  second step:- (1) variable banao or us k under first (2) variables ko add krdo 
  ("Note that = " Data ko print krne k lea hume double or single codes k bajae hume backticks ko use krna ha) 
  third step:- backtick laga kr data input krne k baad hume first (2) variables ko print krne k lea ${} ye property use krni pre gi */

// Example

let a = prompt("Enter your name");
let b = prompt("Enter your friend name");
let c = `${a} and ${b} both are best Friends`;
console.log(c);

