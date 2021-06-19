var audio = document.getElementById("sorry");
var button = document.getElementById("talker-alternative");
button.addEventListener("click", function() {
    audio.play();
}, false);