const user_information = {
  username: "awesome",
  email: "awesome@gmail.com",
  password: "awesome123",
};

// lets imagine that i am building a server and want to send my response to the client like this
// but there is a problem i am sending the password to the client which is not good

// I can use that way but it is not a good way to do that

const { name, email } = user_information;
console.log({ name, email });

// to solve this problem javascript has delete keyword to delete the property from the object this will mutate your original object

delete user_information.password;
console.log(user_information);

// Today I find a awesome thing in javascript that blow my mind

// In this code we are using arguments keyword to get the arguments from the function. It's an object or something like that
// This only work in traditional function not in arrow function
// This a object its also work without passing parameters

function sum() {
  return arguments[0] + arguments[1];
}

console.log(sum(1, 5));
