const play_btn = document.querySelector('#talker-alternative');

// //audio file
let sound = new Audio("https://raw.githubusercontent.com/Yousuke777/sound/main/kansei.mp3");

// //play event
play_btn.addEventListener('click', play);

function play() {
    sound.play();
}