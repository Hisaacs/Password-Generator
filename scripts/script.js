// Based on how many characters the user inputs.This will generate a password
// Note: input requires to be between a minimum 8 and a maximum of 22 characters.

//Event Listener to prompt a questions when button is clicked
document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays which are made up of numbers, symbols, uppercase and lowercase
var charNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSym = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_","-","+","{","}","[","]",";",";","'","<",">","?","/"];
var charLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Varaibles which are to be declared
var charLength = "";
var charSpecial;
var charIsNum;
var IsLowerCase;
var IsUpperCase;

// Prompts users to confirm a number of characters they would like to assign to their password
function createPassword() {
  var charLength = 0;
  var charLength = (prompt("How many characters would you like your password to contain?"));
 
  // Loop until user enter correct critieria between 8 and 128 characters
  while (charLength < 8 || charLength > 128) {
    alert("Your must have minimum of 8 and maximum of 128 characters.\nPlease try again.");
    var charLength = (prompt("Please confim the number of characters you would like your password to contain?"));
  }

  // Log to console
  console.log(charLength);

  // Confirms users selection based on the number of charactes user has entered
  alert(`Your password will have ${charLength} characters`);

  // Password parameters
  var charSpecial = confirm("Click OK button, to include special characters OR cancel not to include.");
  var charIsNum = confirm("Click OK button, to include numeric characters OR cancel not to include.");
  var IsLowerCase = confirm("Click OK button, to include lowercase characters OR cancel not to include.");
  var IsUpperCase = confirm("Click OK button, to include uppercase characters OR cancel not to include.");
  // Parameters based on users selection
  if (IsLowerCase === false && IsUpperCase === false && charSpecial === false && charIsNum === false) {
    alert("You must choose at least one parameter");
    var charSpecial = confirm("Click OK button, to include special characters OR cancel not to include.");
    var charIsNum = confirm("Click OK button, to include numeric characters OR cancel not to include.");
    var IsLowerCase = confirm("Click OK button, to include lowercase characters OR cancel not to include.");
    var IsUpperCase = confirm("Click OK button, to include uppercase characters OR cancel not to include.");
  }

  // Log to console
  console.log(charSpecial);
  console.log(charIsNum);
  console.log(IsLowerCase);
  console.log(IsUpperCase);


  // Empty password array varaiable
  var charPassword = []
  // If met the condition will produce an output based on users selection
  if (charSpecial) {
    charPassword = charPassword.concat(charSym)
  }

  if (charIsNum) {
    charPassword = charPassword.concat(charNum)
  }

  if (IsLowerCase) {
    charPassword = charPassword.concat(charLowerCase)
  }

  if (IsUpperCase) {
    charPassword = charPassword.concat(charUpperCase)
  }

  // For loop selecting random characters from the array
  var rdPassword = ""

  for (var i = 0; i < charLength; i++) {
    rdPassword = rdPassword + charPassword[Math.floor(Math.random() * charPassword.length)];
    // Log to console
    console.log(rdPassword);
  }
  return rdPassword;

}

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var txtPassword = document.querySelector("#password");

  txtPassword.value = password;

}