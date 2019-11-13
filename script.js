//Array of lowercase characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//Array of uppercase characters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//Array of Numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//Array of Symbols
var symbols = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "}", "{", "]", "'", ";", ":", ".", ">", ",", "<", "/", "?", "|"]
//Array of Special Symbols
var specialSymbols = ["Ç","ü", "b", "é", "â", "äàåçêëèïîìæÆôöòûùÿ¢£¥ƒáíóúñÑ¿¬½¼¡«»¦ßµ±°•·²€„…†‡ˆ‰Š‹Œ™š›œŸ¨©®¯³´¸¹¾ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÒÓÔÕÖ×ØÙÚÛÜÝÞãðõ÷øüýþ"]

function () {
    var length = parseInt(prompt(
      "How long do you want your password to be? Minimum : 8 , Maximimum : 128"
    ));

    if (isNaN(length) === true) {
      alert("Password length must be provided as a number. Example : 1 , 43, 92");
      return;
    }
  
    if (length < 8) {
      alert("The password length you have chosen is too short, please pick a length that is above 8 characters.");
      return;
    }

    if (length > 128) {
      alert("Your password length is too long, please pick a password length that is below 129 characters.");
      return;
    }
  
    return passwordOptions;
  }

  // Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to copy button
copyBtn.addEventListener("click", copyToClipboard);