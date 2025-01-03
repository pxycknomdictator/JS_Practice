// Destructuring is the best way to do the job done :)

const object = {
  name: "Noman",
  age: 69,
  adult: true,
};

// Best way Now i can use these values and also i can use alias to rename the keys
const { name: username, age, adult: is_adult } = object;

// one of the worst way to do that
// const name = object.name;
// const age = object.age;
// const adult = object.adult

// one of the best thing is i can use destructuring in arrays

const countries = ["Pakistan", "India", "Russia", "USA", "Bangladesh"];

// best way
const [pakistan, india, russia] = countries;

// wrong way
// const pakistan = countries[0]
// const india = countries[1]
// const russia = countries[2]
// const usa = countries[3]
