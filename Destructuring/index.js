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
