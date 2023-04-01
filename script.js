// Assignment Code

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var uniqueChar = ["!", "@", "#", "$", "%", "^", "&", "*", "<", ">", "?"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var characterPool = []

var pwordLength = "";

function generatePassword() {
  console.log("hello");
  pwordLength = prompt("Please select a password length between 8-128 characters");

  if (pwordLength >= 8 && pwordLength <= 128) {

    // do you want lowercase?
    var useLowercase = confirm("Include Lower Case?")
    console.log(useLowercase)
    if(useLowercase) {
      characterPool = characterPool.concat(lowerCase)
    }
    
    // do you want uppercase? 
    var useUppercase = confirm("Include Upper Case?")
    console.log(useUppercase)
    if(useUppercase) {
      characterPool = characterPool.concat(upperCase)
    }

    // do you want numbers?
    var useNumeric = confirm("Include Numbers?")
    console.log(useNumeric)
    if(useNumeric) {
      characterPool = characterPool.concat(numbers)
    }

    // do you want unique characters?
    var useUnique = confirm("Include Unique Characters?")
    console.log(useUnique)
    if(useUnique) {
      characterPool = characterPool.concat(uniqueChar)
    }
   

    console.log(characterPool)

    

    // ......
    // pull random characters from characterPool and create password
    for (var i = 0; i < parseInt(pwordLength); i++) {
      var randomIndex = Math.floor(Math.random() * characterPool.length);
      console.log(characterPool[randomIndex])
    }

    return randomPassword;

  }


}




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
