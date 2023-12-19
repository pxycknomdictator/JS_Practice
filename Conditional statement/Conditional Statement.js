// // Conditional statement in js
// let a = prompt("Hey what is your age?.")
// a = Number.parseInt(a) //This code is help to convert string to number
// console.log(typeof a)

// Lets practice conditional statement
let b = prompt("Hey what is your age?.")
b = Number.parseInt(b)
// console.log(typeof b)
if (b<0){
  console.log("This is an invalid age!!!.")
}
else if (b>=0 && b<10) {
  console.log("Your age is not valid for NIC and Driving")
}
else if (b>=10 && b<18) {
  console.log("Now you can only think for driving, but not for NIC")  
}
else{
  console.log(" Congratulations!!! Now you can Drive and government should provide you NIC!!!")
}





