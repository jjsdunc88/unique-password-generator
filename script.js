// Potential Password Characters

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var uniqueChar = ["!", "@", "#", "$", "%", "^", "&", "*", "<", ">", "?"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var characterPool = []
var finalArray = "";
var pwordLength = "";


// Generate Password

function generatePassword() {
  pwordLength = prompt("Please select a password length between 8-128 characters");

  if (pwordLength >= 8 && pwordLength <= 128 && Number.isInteger(Number(pwordLength)))
  
  
      // TODO:
    
      //  update JS comments 
      //  deploy live
      //  finish readme 
      
    
  {

    // Confirm Box to include Lowercase letters
    var useLowercase = confirm("Include Lower Case?")
    if(useLowercase) {
      characterPool = characterPool.concat(lowerCase)
    }
    
    // Confirm Box to include Uppercase letters
    var useUppercase = confirm("Include Upper Case?")
    if(useUppercase) {
      characterPool = characterPool.concat(upperCase)
    }

    // Confirm Box to include Numbers
    var useNumeric = confirm("Include Numbers?")
    if(useNumeric) {
      characterPool = characterPool.concat(numbers)
    }

    // Confirm Box to include Unique Characters
    var useUnique = confirm("Include Unique Characters?")
    if(useUnique) {
      characterPool = characterPool.concat(uniqueChar)
    }
   

  
    // Pull random characters from characterPool and create password
    for (var i = 0; i < parseInt(pwordLength); i++) {
      var randomIndex = Math.floor(Math.random() * characterPool.length);
      var x = characterPool[randomIndex]
      finalArray = finalArray.concat(x);
     
    }

  }

}



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalArray;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
