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


//script
var script1 = document.getElementById("script1");
var script2 = document.getElementById("script2");
var script3 = document.getElementById("script3");

var btn = document.getElementById('voice-btn');
var content = document.getElementById('content');
var gakky_comment = document.getElementById('gakky-comment');

//getDate
const getDate = new Date();
var date = getDate.getHours();


if (date > 6 && date < 12) {
    script3.textContent = "3,星野源のせいで立ち直れないんだけど。";
    console.log(date);
}
if (date > 12 && date < 18) {
    script3.textContent = "3,今日夕食つくって！";
    console.log(date);
}


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
            gakky_comment.textContent = "ん！おいしい〜！";
        }
    } else if (text == "いっぱい食べる人 好きだよ") {
        if (script1 == "1,いっぱい食べる人好きだよ")
            likeyou.play();
        gakky_comment.textContent = "好きって言われたら嬉しいです。(照";
    } else if (text == "食べ過ぎだよ ポテトはなしね") {
        if (script2.textContent == "2,食べ過ぎだよ。ポテトはなしね？") {
            no.play();
            gakky_comment.textContent = "えっ！やだ！";
        }
    }
    if (text == "初めて会った時 俺のことどう思った") {
        if (script2.textContent == "2,初めて会った時、俺のことどう思った？") {
            natural.play();
            gakky_comment.textContent = "ナチュラルですごく印象的。でした。。";
        }
        script1.textContent = "1,なら付き合ってよ";
        script2.textContent = "2,俺のこと今どう思ってる？";
        script3.textContent = "3,ガッキーかわいいね";
    } else if (text == "なら付き合ってよ") {
        if (script1.textContent == "1,なら付き合ってよ") {
            sorry.play();
            gakky_comment.textContent = "ごめんなさい！";
        }
    } else if (text == "俺のこと 今どう思ってる") {
        if (script2.textContent == "2,俺のこと今どう思ってる？") {
            boring.play();
            gakky_comment.textContent = "つまんない！";
        }
    } else if (text == "ガッキー かわいいね") {
        if (script3.textContent == "3,ガッキーかわいいね") {
            morelike.play();
            gakky_comment.textContent = "どうしてそーゆーこというんですか！？どんどん好きになっちゃうじゃないですか！";
        }
    }
    if (text == "星野源のせいで立ち直れないんだけど") {
        if (script3.textContent == "3,星野源のせいで立ち直れないんだけど。") {
            blame.play();
            gakky_comment.textContent = "おい、人のせいにするな！";
        }
    }
    if (text == "今日 夕食 作って") {
        if (script3.textContent == "3,今日夕食つくって！") {
            get_used_to.play();
            gakky_comment.textContent = "慣れてないから難しいかもしれないなぁ";
        }
    }

});