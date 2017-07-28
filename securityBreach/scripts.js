// If you decided to inspect my code, good job.
console.log("If you decided to inspect my code, good job.");
var cipher = "$" + "ONO" + "y" + "UOM" + "a";
var deCipher = cipher[8].toUpperCase() + cipher[2].toLowerCase() + cipher[1].toLowerCase() + cipher[2].toLowerCase() + cipher[4].toUpperCase() + cipher[7].toLowerCase() + cipher[6].toLowerCase() + cipher[5].toLowerCase() + cipher[0].toUpperCase();
var userInput = prompt("Please enter password:");
if (userInput === deCipher) {
  // window.open("file:///Users/user/Desktop/loading_spinner.gif", "_self")sdaf;
  // window.open("https://www.youtube.com/watch?v=7UaPL5PGywo", "_self");
  alert("Correct password: Access Granted");
  document.write('<iframe width="1280" height="720" src="https://www.youtube.com/embed/-XpPEmcnKCk?autoplay=1;rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
} else if (userInput !== deCipher) {
  alert("Incorrect password: Access Denied");
  // document.write('<iframe width="1280" height="720" src="https://www.youtube.com/embed/GsfZT6X7weg?autoplay=1;rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
  var audio = new Audio('accessDenied.mp3');
  audio.play();
};
