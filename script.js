// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create arrays for lowercase uppercase special characters and numeric
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialcharacters = ["!", "*", ".", "$", "/", "?", "@", "&"]
var numerics = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

function generatePassword() {
  var password = []
  var length = parseInt(prompt("How long would you like your password to be?"))

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please make the length more than 8 characters and less than 128 characters")
  } else {
    var confirmLower = confirm("Would you like lowercase letters?");
    var confirmUpper = confirm("Would you like uppercase letters?");
    var confirmSymbols = confirm("Would you like any special characters?");
    var confirmNumbers = confirm("Would you like any numbers?");


    while (password.length < length) {
      if (password.length === length) {
        break
      }
      if (confirmLower) {
        password.push(lowercase[Math.floor(Math.random() * lowercase.length)])
      }
      if (password.length === length) {
        break
      }
      if (confirmUpper) {
        password.push(uppercase[Math.floor(Math.random() * uppercase.length)])
      }
      if (password.length === length) {
        break
      }
      if (confirmSymbols) {
        password.push(specialcharacters[Math.floor(Math.random() * specialcharacters.length)])
      }
      if (password.length === length) {
        break
      }
      if (confirmNumbers) {
        password.push(numerics[Math.floor(Math.random() * numerics.length)]);
      }
    }
  }

  return password.join('')
}