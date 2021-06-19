var talker1 = document.getElementById("talker-alternative1");
var talker2 = document.getElementById("talker-alternative2");
var talker3 = document.getElementById("talker-alternative3");

if(talker1.onclick){
    function() {
        // コメントが変わる
        document.getElementById("gakky-comment").innerHTML = "ごめんなさい！";
        // 画像が変わる
        document.getElementById("gakky-img").src = "./img/sorry.png";
      };
}



