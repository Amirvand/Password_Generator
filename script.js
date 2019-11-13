//Array of lowercase characters
var lowercase = ["abcdefghijklmnopqrstuvwxyz"]
//Array of uppercase characters
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
//Array of Numbers
var numbers = ["01234566789"]
//Array of Symbols
var symbols = ["`~!@#$%^&*()-_=+[}{]';:.>,</?|"]
//Array of Special Symbols
var specialSymbols = ["ÇübéâäàåçêëèïîìæÆôöòûùÿ¢£¥ƒáíóúñÑ¿¬½¼¡«»¦ßµ±°•·²€„…†‡ˆ‰Š‹Œ™š›œŸ¨©®¯³´¸¹¾ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÒÓÔÕÖ×ØÙÚÛÜÝÞãðõ÷øüýþ"]

function generateRandomPassword (passwordLength) {
  var outputPassword = "";
  var allPossibleChars  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+-=";
  for (var i = 0; i < passwordLength; i++) {
      outputPassword += allPossibleChars.charAt(Math.floor(Math.random() * allPossibleChars.length));
  }
  return outputPassword;
}

function myFunction() {
  var copyText = document.getElementById("output");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}