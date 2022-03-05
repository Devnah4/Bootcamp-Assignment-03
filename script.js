// Assignment code here

// Variable Code
// Numbers = "0","1","2","3","4","5","6","7","8","9",
// Special = "!","#","$","%",&,(,),*,+,-,.,/,<,>,!,?,@,[,]",
// Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
// Lower = "abcdefghijklmnopqrstuvwxyz",
const arrayUpper = Array.from(Array(26)).map((e, i) => i + 65);
const alphaUpper = arrayUpper.map((x) => String.fromCharCode(x));

const arrayLower = Array.from(Array(26)).map((e, i) => i + 97)
const alphaLower = arrayLower.map((x) => String.fromCharCode(x));

const specialCharacters = ["!","#","$","%","&","(",")","*","+","-",".","/","<",">","!","?","@","[","]"];
const numeric = ["0","1","2","3","4","5","6","7","8","9",];


function generatePassword() {
  var results = ""
  // Initial Prompt
  var numberOfCharacters = window.prompt("How Many Variables would you like? Select between 8 and 128.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    window.confirm ("Please Enter a Valid Answer")
    return generatePassword();
  }
  // Choice Prompt
  var characterQuantity = parseInt(numberOfCharacters);
  if(characterQuantity >= 8 && characterQuantity <= 128) {
    var caseUpper = window.confirm("Would You Like to use Uppercase Characters?");
    var caseLower = window.confirm("Would You Like to use Lowercase Characters?");
    var caseSpecial = window.confirm("Would You Like to use Special Characters?");
    var caseNumbers = window.confirm("Would You Like to use Numbers?");
    var yesButton = []; 
    if(caseUpper == true) yesButton.push(alphaUpper); 
    if(caseLower == true) yesButton.push(alphaLower); 
    if(caseSpecial == true) yesButton.push(specialCharacters); 
    if(caseNumbers == true) yesButton.push(numeric); 

    // Sets the Password
    for(var i = 0; i < characterQuantity; i++) {
      var storeBtn = Math.floor(Math.random() *yesButton.length);
      var selectedArray = yesButton[storeBtn]
      results += selectedArray[Math.floor(Math.random() *selectedArray.length)];
    }
  }
  // Provides the Solution
    return results;
}

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
