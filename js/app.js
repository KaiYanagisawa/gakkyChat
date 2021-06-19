//audio
const potato = document.getElementById("potato");
const sorry = document.getElementById("sorry");
const ice = document.getElementById("ice");
const natural = document.getElementById("natural");
const yammy = document.getElementById("yammy");
const no = document.getElementById("no");
const likeyou = document.getElementById("likeyou");
const medicine = document.getElementById("medicine");
const morelike = document.getElementById("more_like");

//script
const script1 = document.getElementById("script1");
const script2 = document.getElementById("script2");
var script3 = document.getElementById("script3");

var btn = document.getElementById('voice-btn');
var content = document.getElementById('content');
var gakky_comment = document.getElementById('gakky-comment');

//getDate
const getDate = new Date();
const date = getDate.getHours();

//音声認識API
var speech = new webkitSpeechRecognition();

speech.lang = "ja";

btn.addEventListener('click', function() {
    speech.start();
    btn.textContent = "話してください";
});


speech.addEventListener('result', function(e) {
    console.log(e);
    var text = e.results[0][0].transcript;
    content.textContent = text;
    btn.textContent = "声をかける";
    if (text == "お昼何食べたい") {
        if (script1.textContent == "1,お昼何食べたい？") {
            potato.play();
            gakky_comment.textContent = "ディームンプレートの２２５ｇのやつとフライドチキンのセット！ポテトとか全部大盛りで";
        }
        script1.textContent = "1,いっぱい食べる人好きだよ";
        script2.textContent = "2,食べ過ぎだよ。ポテトはなしね？";
        script3.textContent = "3,おいしい？";
    } else if (text == "付き合ってください") {
        sorry.play();
        gakky_comment.textContent = "ごめんなさい！";
    } else if (text == "美味しい") {
        if (script3.textContent == "3,おいしい？") {
            yammy.play();
            gakky_comment.textContent("ん！おいしい〜！")
        }
    } else if (text == "いっぱい食べる人 好きだよ") {
        if (script1 == "1,いっぱい食べる人好きだよ")
            likeyou.play();
        gakky_comment.textContent("好きって言われたら嬉しいです。(照")
    } else if (text == "食べ過ぎだよ ポテトはなしね") {
        if (script2.textContent == "2,食べ過ぎだよ。ポテトはなしね？") {
            no.play();
            gakky_comment.textContent("えっ！やだ！");
        }
    }
    if (text == "初めて会った時 俺のことどう思った") {
        if (script2.textContent == "2,初めて会った時、俺のことどう思った？") {
            natural.play();
            gakky_comment.textContent("ナチュラルですごく印象的。でした。。");
        }
        script1.textContent = "1,なら付き合おうよ";
        script2.textContent = "2,俺のこと今どう思ってる？";
        script3.textContent = "3,ガッキーかわいいね";
    } else if (text == "なら付き合おうよ") {
        if (script1.textContent == "1,なら付き合おうよ") {
            sorry.play();
            gakky_comment.textContent("ごめんなさい！");
        }
    } else if (text == "俺のこと 今どう思ってる") {
        if (script2.textContent == "2,俺のこと今どう思ってる？") {
            boring.play();
            gakky_comment.textContent("つまんない！");
        }
    } else if (text == "ガッキー かわいいね") {
        if (script3.textContent == "3,ガッキーかわいいね") {
            morelike.play();
            gakky_comment.textContent("どうしてそーゆーこというんですか！？どんどん好きになっちゃうじゃないですか！");
        }
    }
});