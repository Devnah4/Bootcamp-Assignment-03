// Assignment code here
var passwordLimits = {
  min: 8,
  max: 128,
}

var passwordCriteria = {
  includeNumbers: true,
  includeSpecial: true,
  includeUpper: true,
  includeLower: true,
}

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);
  return value;
};

function generatePassword() {
  var startCon = window.prompt("How Many Variables would you like? Select between 8 and 128.")
  if (startCon < 8 || startCon > 128) {
    window.confirm ("Please Enter a Valid Answer")
    return generatePassword();
  }  
  var includeNumbers = window.confirm("Include numbers?")
  if (includeNumbers) {
    passwordCriteria += "0123456789"
  }
  var includeSpecial = window.confirm("Include Special Characters?")
  if (includeSpecial) {
    passwordCriteria += "!#$%&()*+-./<>!?@[]"
  }
  var includeUpper = window.confirm("Include Uppercase Letters?")
  if (includeUpper) {
    passwordCriteria += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  var includeLower = window.confirm("Include Lowercase Letters?")
  if (includeLower) {
    passwordCriteria += "abcdefghijklmnopqrstuvwxyz"
  }
}

// for (let i = 0; i = passwordCriteria; i++) {
//  writePassword() ;{
//  }
// }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
