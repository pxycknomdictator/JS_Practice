// now we study another some method of arrays in JS


// forEach array method is js           (.forEach)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = arr.forEach((value, index, array) => {
    console.log(index + " is the index of " + value);
})

// Convert string to Array  (Array.from)
let arr1 = 'Noman';
const result = Array.from(arr1)
console.log(result)

// We can Modify and create new array   (.map)
let Jay = arr.map((x) => {
    return x * 10;
})
console.log(Jay)

// Another map example
let chan = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const cov = chan.map((x) => {
    return x % 10 == 0;
})
console.log(cov,typeof cov)         // map(method) cannot change the array they just create a new array

// We can filter the values and create a new array  (.filter)
let arrey = [89, 23, 4, 5, 23, 254, 76, 78, 0];
let b = arrey.filter((a) => {
    // return a != 10;
    return a < 10;
})
console.log(b);

// Reduce method help us to operate the elements of the array     (.reduce)
let v = arr.reduce((x, y) => {
    // return x + y;
    return x * y;
})
console.log(v)

