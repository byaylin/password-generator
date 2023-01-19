// Assignment code here
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXY";
var lowerCase= "abcdefghijklmnopqrstuvwyxz";
var numbers= "0123456789";
var specialCharacters= "!@#$%^&*()_+=\|{}[];:,><./?`~";

var randomPass= "";
var newPass = "";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var pwLength = window.prompt("Enter length of password, must be between 8 and 128 characters");
  if ((pwLength < 8) || (pwLength > 128)){
    alert("Please choose a number between 8 and 128");

    return;
  }
  //special character
  var specialChars = confirm("Would you like to use special characters?")
  if (specialChars === true){
  randomPass = randomPass + specialCharacters
  console.log(randomPass)
}
// uppercase letters
var capital= confirm("Would you like to use uppercase letters?")
if (capital === true){
  randomPass = randomPass + upperCase
  console.log(randomPass)
}
//lowercase letter
var lower = window.confirm("Would you like to use lowercase letters?")
if (lower === true){
  randomPass = randomPass + lowerCase
  console.log(randomPass)
}
//numeric value
var num = window.confirm("Would you like to include numbers?")
if (num===true){
  randomPass = randomPass + numbers
  console.log(randomPass)
}
for (let i = 0; i < pwLength; i++){
  newPass = newPass + randomPass.charAt(Math.floor(Math.random() * randomPass.length))
}
}
