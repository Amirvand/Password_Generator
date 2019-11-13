//This can all be useful if I ever plan to go back and add checkboxes instead of having 1 set value with EVERYTHING in it.
//Can make it so it rolls a random number between X & Y, depending on what the user checks off.
//That roll will determine which array, roll again to pick the number in the array. Repeat until you hit the requested pass size.
// //Array of lowercase characters
// var lowercase = ["abcdefghijklmnopqrstuvwxyz"]
// //Array of uppercase characters
// var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
// //Array of Numbers
// var numbers = ["01234566789"]
// //Array of Symbols
// var symbols = ["`~!@#$%^&*()-_=+[}{]';:.>,</?|"]
// //Array of Special Symbols
// var specialSymbols = ["ÇübéâäàåçêëèïîìæÆôöòûùÿ¢£¥ƒáíóúñÑ¿¬½¼¡«»¦ßµ±°•·²€„…†‡ˆ‰Š‹Œ™š›œŸ¨©®¯³´¸¹¾ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÒÓÔÕÖ×ØÙÚÛÜÝÞãðõ÷øüýþ"]

function generate(){
  //set length to the password
  let difficulty = document.getElementById("MinMaxslider").value;
  //possible password values
  let values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()-_=+[}{]';:.>,</?|ÇübéâäàåçêëèïîìæÆôöòûùÿ¢£¥ƒáíóúñÑ¿¬½¼¡«»¦ßµ±°•·²€„…†‡ˆ‰Š‹Œ™š›œŸ¨©®¯³´¸¹¾ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÒÓÔÕÖ×ØÙÚÛÜÝÞãðõ÷øüýþ";
  let password = "";
  //create for loop to choose password characters
  for(var i = 0; i <= difficulty; i++){
      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }
  //adds password to textbox
  document.getElementById("pass").value = password;
}

//Slider functionality, Min : 8 , Max : 128 . 
document.getElementById("MinMaxslider").oninput = function(){
  if(document.getElementById("MinMaxslider").value > 0){
      document.getElementById("length").innerHTML = "Length: " + document.getElementById("MinMaxslider").value;
  }
  else{
      document.getElementById("length").innerHTML = "Length: 8";
  }
}

//Ability to copy password
function copyPassword(){
  document.getElementById("pass").select();
  document.execCommand("Copy");
  alert("Your new password has been copied!");
}