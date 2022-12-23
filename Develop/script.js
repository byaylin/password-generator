// Assignment code here


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

// Assignment code here
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4", "5","6","7","8","9"];
var specialCharacters = ["!", "@","#","$","%","^","&","*","(",")","-","+","=","_","`","{","}","[","]"]; 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}


function generatePassword() {
  var choices = [];
  var pwLength = window.prompt("Enter length of password, must be between 8 and 128 characters")
  if (confirm("Would you like to use uppercase letters?")){
    choices.concat(upperCase);
  }
  if (confirm("Would you like to use lowercase letters?")) {
    choices.concat(lowerCase)
  }
  if (confirm("Would you like to use special characters?")) {
    choices.concat(specialCharacters)
  }
  if (!upperCase && !lowerCase && !numbers && !specialCharacters) {
  window.prompt("Please choose at least one set of characters")
  }
  var newPw = "";
  for (i = 0; i < pwLength; i ++){
  newPw += choices[Math.floor(Math.random()*choices.length)]
 }
}
document.getElementById("password").value = password


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
