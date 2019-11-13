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

function generate(){
  //set length to the password
  let difficulty = document.getElementById("slider").value;
  //possible password values
  let values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()-_=+[}{]';:.>,</?|ÇübéâäàåçêëèïîìæÆôöòûùÿ¢£¥ƒáíóúñÑ¿¬½¼¡«»¦ßµ±°•·²€„…†‡ˆ‰Š‹Œ™š›œŸ¨©®¯³´¸¹¾ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÒÓÔÕÖ×ØÙÚÛÜÝÞãðõ÷øüýþ";
  let password = "";
  //create for loop to choose password characters
  for(var i = 0; i <= difficulty; i++){
      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }
  //add password to textbox/display area
  document.getElementById("display").value = password;
  //add password to previously generated passwords section
  document.getElementById("lastNums").innerHTML += password + "<br />";
}

// Was a copy and paste to get the slider to work, uncertain on what values need to be set
document.getElementById("slider").oninput = function(){

  if(document.getElementById("slider").value > 0){
      document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
  }
  else{
      document.getElementById("length").innerHTML = "Length: 8";
  }

}