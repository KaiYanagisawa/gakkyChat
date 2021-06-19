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
});