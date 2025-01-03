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
