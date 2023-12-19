// const pwd = parseInt(prompt(`Enter your password`))  You can also use this prompt code
// Number.parseInt is a feature that convert string to Number


const pwd = prompt('enter your password');
let check = Number.parseInt(pwd);
const fin = 1234;
if (check === fin) {
    console.log('Correct')
} else {
    console.log('Incorrect')
}


