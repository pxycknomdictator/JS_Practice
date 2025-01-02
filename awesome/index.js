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
