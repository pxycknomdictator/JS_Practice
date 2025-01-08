const range = document.getElementById("range");
const display = document.getElementById("password");
const password = "abcABCEDFGHdefghijklmnoVWXYZpqrstuvwxyzIJQRSTU";

range.addEventListener("input", () => {
  display.innerText = "";
  console.log(range.value);
});
