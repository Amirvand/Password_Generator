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

document.getElementById("slider").oninput = function(){

  if(document.getElementById("slider").value > 0){
      document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
  }
  else{
      document.getElementById("length").innerHTML = "Length: 8";
  }

}
