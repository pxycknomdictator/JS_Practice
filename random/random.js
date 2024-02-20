let min = 3;
let max = 8;


const randomNumbers = Math.floor(Math.random() * (max - min + 1) + min);

console.log(randomNumbers);

// const randomNumbers = Math.floor(Math.random() * (max - min)); <----This out become 0 to 4---->
// const randomNumbers = Math.floor(Math.random() * (max - min + 1)); <----This out become 0 to 5---->
// const randomNumbers = Math.floor(Math.random() * (max - min) + 1); <----This out become 1 to 5---->




