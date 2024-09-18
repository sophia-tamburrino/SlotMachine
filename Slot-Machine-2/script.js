var slotTokenz = 100
function runSlots() {

var columnOne = Math.floor((Math.random()*100)) + 1;
var columnTwo = Math.floor((Math.random()*100)) + 1;
var columnThree = Math.floor((Math.random()*100)) + 1;
var yourBet = Number(document.getElementById('betAmount').value);

//columnOne

if (columnOne <= 5) {
document.getElementById('imageOne').src='slotimages/neonseven.PNG';
}
else if (columnOne >= 6 && columnOne <= 15) {
  document.getElementById('imageOne').src='slotimages/neondiamond.PNG';
}
else if (columnOne >= 16 && columnOne <= 30) {
  document.getElementById('imageOne').src='slotimages/neoncherry.PNG';
}
else if (columnOne >= 31 && columnOne <= 50) {
  document.getElementById('imageOne').src='slotimages/neonclover.PNG';
}
else if (columnOne >= 51 && columnOne <= 100) {
  document.getElementById('imageOne').src='slotimages/neonbell.PNG';
}

//columnTwo

if (columnTwo <= 5) {
document.getElementById('imageTwo').src='slotimages/neonseven.PNG';
}
else if (columnTwo >= 6 && columnTwo <= 15) {
  document.getElementById('imageTwo').src='slotimages/neondiamond.PNG';
}
else if (columnTwo >= 16 && columnTwo <= 30) {
  document.getElementById('imageTwo').src='slotimages/neoncherry.PNG';
}
else if (columnTwo >= 31 && columnTwo <= 50) {
  document.getElementById('imageTwo').src='slotimages/neonclover.PNG';
}
else if (columnTwo >= 51 && columnTwo <= 100) {
  document.getElementById('imageTwo').src='slotimages/neonbell.PNG';
}

//columnThree

if (columnThree <= 5) {
document.getElementById('imageThree').src='slotimages/neonseven.PNG';
}
else if (columnThree >= 6 && columnThree <= 15) {
  document.getElementById('imageThree').src='slotimages/neondiamond.PNG';
}
else if (columnThree >= 16 && columnThree <= 30) {
  document.getElementById('imageThree').src='slotimages/neoncherry.PNG';
}
else if (columnThree >= 31 && columnThree <= 50) {
  document.getElementById('imageThree').src='slotimages/neonclover.PNG';
}
else if (columnThree >= 51 && columnThree <= 100) {
  document.getElementById('imageThree').src='slotimages/neonbell.PNG';
}

//token system

if ((columnThree >= 51 && columnThree <= 100) && (columnTwo >= 51 && columnTwo <= 100) && (columnOne >= 51 && columnOne <= 100)) {
  slotTokenz = (yourBet * 4) + slotTokenz
  strMessage = "Cool! You won " + (yourBet * 4) + " tokens! You now have " + slotTokenz + " left to bet."
  document.getElementById('output').innerHTML = strMessage
}
else if ((columnOne >= 31 && columnOne <= 50) && (columnTwo >= 31 && columnTwo <= 50) && (columnThree >= 31 && columnThree <= 50)) {
  slotTokenz = (yourBet * 25) + slotTokenz
  strMessage = "Sweet! You won " + (yourBet * 25) + " tokens! You now have " + slotTokenz + " left to bet."
  document.getElementById('output').innerHTML = strMessage
}
else if ((columnThree >= 16 && columnThree <= 30) && (columnTwo >= 16 && columnTwo <= 30) && (columnOne >= 16 && columnOne <= 30)) {
  slotTokenz = (yourBet * 55) + slotTokenz
  strMessage = "Nice! You won " + (yourBet * 55) + " tokens! You now have " + slotTokenz + " left to bet."
  document.getElementById('output').innerHTML = strMessage
}
else if ((columnThree >= 6 && columnThree <= 15) && (columnTwo >= 6 && columnTwo <= 15) && (columnOne >= 6 && columnOne <= 15)) {
  slotTokenz = (yourBet * 180) + slotTokenz
  strMessage = "Wow! You won " + (yourBet * 180) + " tokens! You now have " + slotTokenz + " left to bet."
  document.getElementById('output').innerHTML = strMessage
}
else if ((columnThree <= 5) && (columnTwo <= 5) && (columnOne <= 5)) {
  slotTokenz = (yourBet * 1550) + slotTokenz
  strMessage = "Woah! You won " + (yourBet * 1550) + " tokens! You now have " + slotTokenz + " left to bet."
  document.getElementById('output').innerHTML = strMessage
}
else if (yourBet == 0) {
  strMessage = "You did not place a bet."
  document.getElementById('output').innerHTML = strMessage
}
else {
  slotTokenz = slotTokenz - yourBet
  strMessage = "Uh oh! You lost " + yourBet + " tokens! You now have " + slotTokenz + " left to bet."
  document.getElementById('output').innerHTML = strMessage
}

document.getElementById('tokens').innerHTML = slotTokenz
}