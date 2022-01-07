var characterLength = 8;
var choiceArray = [];
// The below arrays include my symbols, lowercase plus uppercase charcters as well as my numbers.
var specialCharactersArray = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "[",
  "]",
  "{",
  "}",
  "=",
  "?",
];
var lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function getPrompts() {
  choiceArray = [];

  characterLength = parseInt(
    prompt(
      "Please select a password length between 8-128 characters"
    )
  );
// if the inout does not meet the password length criteria then the alert below will trigger
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Your password must be between 8-128 characters. Please try again");
    return false;
  }
