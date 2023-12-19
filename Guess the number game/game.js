// Please guess the correct number



let Num = 0;
while (Num <= 10) {
    const a = prompt('Guess the number')
    if (a >= 0 && a < 20) {
        console.log('Your number is greater than the correct number ')
    } else if (a >= 20 && a < 60) {
        console.log('Your number is closer than the current number')
    } else if (a >= 60 && a <= 100) {
        console.log('Your number is Less than the correct number')
    } else {
        console.log('Please enter the valid number')
    } if (a == 47) {
        console.log('Congratulation you guess the correct number❤️❤️❤️');
        break;
    }
};




