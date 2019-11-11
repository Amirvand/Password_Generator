//Array of lowercase characters
var lowercase = ["abcdefghijklmnopqrstuvwxyz"]
//Array of uppercase characters
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
//Array of Symbols
var symbols = ["`~!@#$%^&*()-_=+[}{]';:.>,</?\|"]
//Array of Special Symbols
var specialSymbols = ["ÇüéâäàåçêëèïîìæÆôöòûùÿ¢£¥ƒáíóúñÑ¿¬½¼¡«»¦ßµ±°•·²€„…†‡ˆ‰Š‹Œ™š›œŸ¨©®¯³´¸¹¾ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÒÓÔÕÖ×ØÙÚÛÜÝÞãðõ÷øüýþ"]

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

    var hasSpecialCharacters = confirm(
      "Click OK to confirm including special characters."
    );

    var hasNumericCharacters = confirm(
      "Click OK to confirm including numeric characters."
    );

    var hasLowerCasedCharacters = confirm(
      "Click OK to confirm including lowercase characters."
    );
  
    var hasUpperCasedCharacters = confirm(
      "Click OK to confirm including uppercase characters."
    );
  
    // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
    if (
      hasSpecialCharacters === false &&
      hasNumericCharacters === false &&
      hasLowerCasedCharacters === false &&
      hasUpperCasedCharacters === false
    ) {
      alert("Must select at least one character type");
      return;
    }
  
    // Object to store user input
    var passwordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters
    };
  
    return passwordOptions;
  }