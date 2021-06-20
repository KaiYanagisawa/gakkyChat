//audio
var potato = document.getElementById("potato");
var sorry = document.getElementById("sorry");
var ice = document.getElementById("ice");
var natural = document.getElementById("natural");
var yammy = document.getElementById("yammy");
var no = document.getElementById("no");
var likeyou = document.getElementById("likeyou");
var medicine = document.getElementById("medicine");
var morelike = document.getElementById("more_like");
var blame = document.getElementById("blame");
var get_used_to = document.getElementById("get_used_to");
var happy = document.getElementById("happy");

//script
var script1 = document.getElementById("script1");
var script2 = document.getElementById("script2");
var script3 = document.getElementById("script3");

var btn = document.getElementById('voice-btn');
var content = document.getElementById('content');
var gakky_comment = document.getElementById('gakky-comment');
var start_btn = document.getElementById('start-btn');

//first_lording
window.onload = function() {
    vr_function();
};

//getDate
const getDate = new Date();
var date = getDate.getHours();


// video
var video = document.querySelector('#video');

var playVideo = function(endingTime) {
    video.play();
    setTimeout('video.pause()', endingTime * 1000);
}

//start
start_btn.onclick = function() {
    script1.textContent = "お昼何食べたい？";
    script2.textContent = "初めて会った時、俺のことどう思った？";
    if (date >= 6 && date <= 12) {
        script3.textContent = "星野源のせいで立ち直れないんだけど。";
        console.log(date);
    }
    if (date >= 12 && date <= 18) {
        script3.textContent = "今日夕食つくって！";
        console.log(date);
    }
}

// reloadメソッドによりページをリロード
function doReload() {
    window.location.reload();
}

function vr_function() {
    //音声認識API
    var speech = new webkitSpeechRecognition();

    speech.lang = "ja";
    speech.interimResults = true;
    speech.continuous = true;

    speech.onsoundstart = function() {
        document.getElementById('status').innerHTML = "認識中";
    };
    speech.onnomatch = function() {
        document.getElementById('status').innerHTML = "もう一度試してください";
    };
    speech.onerror = function() {
        document.getElementById('status').innerHTML = "エラー";
        if (flag_speech == 0)
            vr_function();
    };
    speech.onsoundend = function() {
        document.getElementById('status').innerHTML = "停止中";
        vr_function();
    };

    speech.onresult = function(e) {
        console.log(e);
        var results = e.results;
        for (var i = e.resultIndex; i < results.length; i++) {
            if (results[i].isFinal) {
                vr_function();
            } else {
                flag_speech = 1;
            }
        }
        var text = e.results[0][0].transcript;
        content.textContent = text;
        if (text.indexOf("楽器") !== -1 || text.indexOf("ガッキー") !== -1 || text.indexOf("タッキー") !== -1 || text.indexOf("ラッキー") !== -1) {
            if (text.indexOf("お昼何食べたい") !== -1) {
                if (script1.textContent == "お昼何食べたい？") {
                    potato.play();
                    playVideo(8);
                    gakky_comment.textContent = "ディームンプレートの２２５ｇのやつとフライドチキンのセット！ポテトとか全部大盛りで";
                    vr_function();
                }
                script1.textContent = "いっぱい食べる人好きだよ";
                script2.textContent = "食べ過ぎだよ。ポテトはなしね？";
                script3.textContent = "おいしい？";
            } else if (text.indexOf("美味しい") !== -1) {
                if (script3.textContent == "おいしい？") {
                    yammy.play();
                    playVideo(2);
                    gakky_comment.textContent = "ん！おいしい〜！";
                    vr_function();
                }
            } else if (text.indexOf("いっぱい食べる人好きだよ") !== -1) {
                if (script1.textContent == "いっぱい食べる人好きだよ") {
                    happy.play();
                    playVideo(2);
                    gakky_comment.textContent = "好きって言われたら嬉しいです。(照";
                    vr_function();
                }
            } else if (text.indexOf("食べ過ぎだよポテトはなしね") !== -1) {
                if (script2.textContent == "食べ過ぎだよ。ポテトはなしね？") {
                    no.play();　
                    playVideo(1.5);
                    gakky_comment.textContent = "えっ！やだ！";
                    vr_function();
                }
            }
            if (text.indexOf("初めて会った時俺のことどう思った") !== -1) {
                if (script2.textContent == "初めて会った時、俺のことどう思った？") {
                    natural.play();　
                    playVideo(3.5);
                    gakky_comment.textContent = "ナチュラルですごく印象的。でした。。";
                    vr_function();
                }
                script1.textContent = "なら付き合ってよ";
                script2.textContent = "俺のこと今どう思ってる？";
                script3.textContent = "ガッキーかわいいね";
            } else if (text.indexOf("なら付き合ってよ") !== -1) {
                if (script1.textContent == "なら付き合ってよ") {
                    sorry.play();　
                    playVideo(1);
                    gakky_comment.textContent = "ごめんなさい！";
                    vr_function();
                }
            } else if (text.indexOf("俺のこと今どう思ってる") !== -1) {
                if (script2.textContent == "俺のこと今どう思ってる？") {
                    boring.play();　
                    playVideo(1);
                    gakky_comment.textContent = "つまんない！";
                    vr_function();
                }
            } else if (text.indexOf("ガッキーかわいいね") !== -1) {
                if (script3.textContent == "ガッキーかわいいね") {
                    morelike.play();　
                    playVideo(4.5);
                    gakky_comment.textContent = "どうしてそーゆーこというんですか！？どんどん好きになっちゃうじゃないですか！";
                    vr_function();
                }
            }
            if (text.indexOf("星野源のせいで立ち直れないんだけど") !== -1) {
                if (script3.textContent == "星野源のせいで立ち直れないんだけど。") {
                    blame.play();　
                    playVideo(2.5);
                    gakky_comment.textContent = "おい、人のせいにするな！";
                    vr_function();
                }
            }
            if (text.indexOf("今日夕食作って") !== -1) {
                if (script3.textContent == "今日夕食つくって！") {
                    get_used_to.play();　
                    playVideo(2.5);
                    gakky_comment.textContent = "慣れてないから難しいかもしれないなぁ";
                    vr_function();
                }
            }
            if (text.indexOf("もう1回話したい") !== -1) {
                console.log("end");
                morelike.play();
                setTimeout(doReload, 5000);
            }
        }
    }
    flag_speech = 0;
    document.getElementById('status').innerHTML = "準備完了";
    speech.start();
}