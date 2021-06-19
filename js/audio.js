var audio = document.getElementById("sorry");
var audio2 = document.getElementById("ice");
var audio3 = document.getElementById("medicine");

var button = document.getElementById("talker-alternative");
var button2 = document.getElementById("talker-alternative2");
var button3 = document.getElementById("talker-alternative3");

button.addEventListener("click", function() {
    audio.play();
}, false);
button2.addEventListener("click", function() {
    audio2.play();
}, false);
button3.addEventListener("click", function() {
    audio3.play();
}, false);