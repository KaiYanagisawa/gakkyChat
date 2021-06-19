var sorry = document.getElementById("sorry");
var ice = document.getElementById("ice");
var medicine = document.getElementById("medicine");
var likeyou = document.getElementById("likeyou");
var potato = document.getElementById("potato");
var yammy = document.getElementById("yammy");


var btn = document.getElementById('voice-btn');
var content = document.getElementById('content');

//音声認識API
var speech = new webkitSpeechRecognition();

speech.lang = "ja";

btn.addEventListener('click', function() {
    speech.start();
});


speech.addEventListener('result', function(e) {
    console.log(e);
    var text = e.results[0][0].transcript;
    content.textContent = text;
    if (text == "お昼何食べたい") {
        potato.play();
    } else if (text == "付き合ってください") {
        sorry.play();
    } else if (text == "美味しい") {
        yammy.play();
    }
});