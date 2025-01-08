const range = document.getElementById("range");
const display = document.getElementById("password");
const password = "abcABCEDFGHdefghijklmnoVWXYZpqrstuvwxyzIJQRSTU";

range.addEventListener("input", () => {
  display.innerText = "";
  const passwordLength = range.value;
  let generatedPassword = "";

  for (let i = 0; i < passwordLength; i++) {
    const random = Math.floor(Math.random() * password.length);
    generatedPassword += password[random];
  }
  display.innerText = generatedPassword;
});
