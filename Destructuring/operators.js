// one of the best thing i like about javascript is spread and rest operators

// # Spread Operator lets suppose you want to copy data from one object to another object or array you can use spread operator

const twin_brother_1 = {
  name: "John",
  age: 20,
  address: "Earth",
  father: "John Father",
};

// Both objects have same values except name
const twin_brother_2 = {
  name: "Kevin",
  ...twin_brother_1,
};

// # Rest Operator lets suppose if you want to accept multiple arguments in one parameter you can use spread operator

const rest_operator = (...arguments) =>
  arguments.reduce((accumulator, element) => accumulator + element, 0);

console.log(rest_operator(2, 4, 5, 3, 5, 2, 5));

// # Let's use both rest and spread operator :D

const price = [438, 2000, 192, 399, 2993, 2999, 277, 498, 229, 66];

// capturing all numbers with rest operator
const multiply_by_2 = (...prices) => prices.map((element) => element * 2);

// spreading all numbers with spread operator
console.log(multiply_by_2(...price));
