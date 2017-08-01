// 終止函數
// function a(){
//    alert("a");
//    b=function(x){};
// };
// function b(){
//    alert("b");
// };
// a();
// b();

$(document).ready(function() {
    console.log("ready!");
    $('.ex').addClass('exx');

    $('#start').on('click', function() {
            countDown()
        })
        // 一按鈕塞兩種功能
        // btnout 一個是呼叫視窗，一個是停止倒數
    $('#btout').on('click', function() {
        if (s != null) {
            clearInterval(s);
        }
        if (t1 != null) {
            clearInterval(t1);
        }
    })
});

j = 0;
count = 0;
MM = 0;
SS = 60; // 秒 90s
MS = 0;
total = (MM + 1) * 600;
d = 180 * (MM + 1);
MM = "0" + MM;
var gameTime = 10;
//count down
var showTime = function() {
    total = total - 1;
    if (total < 0) {
        clearInterval(s);
        clearInterval(t1);

        $(".time").html("Times up");

        /* 時間到，呼叫交卷 */
        $('#btout').click()

        $(".pie1").css("-o-transform", "none");
        $(".pie1").css("-moz-transform", "none");
        $(".pie1").css("-webkit-transform", "none");
        $(".pie2").css("-o-transform", "none");
        $(".pie2").css("-moz-transform", "none");
        $(".pie2").css("-webkit-transform", "none");
    } else {
        if (total > 0 && MS > 0) {
            MS = MS - 1;
            if (MS < 10) {
                MS = "0" + MS
            }
        }
        if (MS == 0 && SS > 0) {
            MS = 10;
            SS = SS - 1;
            if (SS < 10) {
                SS = "0" + SS
            }
        }

        if (SS == 0 && MM > 0) {
            SS = 60;
            MM = MM - 1;
            if (MM < 10) {
                MM = "0" + MM;
            }
        }

        $(".time").html(SS + "s");
    }

};

var start = function() {
    //i = i + 0.6;
    i = i + 360 / ((gameTime) * 10); //旋轉角度  90s 為 0.4  60s為0.6
    count = count + 1;
    if (count <= (gameTime / 2 * 10)) { // 一半的角度  90s 為 450
        $(".pie1").css("-o-transform", "rotate(" + i + "deg)");
        $(".pie1").css("-moz-transform", "rotate(" + i + "deg)");
        $(".pie1").css("-webkit-transform", "rotate(" + i + "deg)");
    } else {

        /* 換顏色 */
        $(".pie2").css("backgroundColor", "#f9c3c3");
        $(".pie2").css("-o-transform", "rotate(" + i + "deg)");
        $(".pie2").css("-moz-transform", "rotate(" + i + "deg)");
        $(".pie2").css("-webkit-transform", "rotate(" + i + "deg)");
    }
};

var s = null,
    t1 = null;
var running = false;

var countDown = function() {

    //80*80px 時間條
    i = 0;
    j = 0;
    count = 0;
    MM = 0;
    SS = gameTime;
    MS = 0;
    total = gameTime * 10;
    d = 180 * (MM + 1);
    MM = "0" + MM;

    showTime();

    if (s != null) {
        clearInterval(s);
    }
    if (t1 != null) {
        clearInterval(t1);
    }


    s = setInterval("showTime()", 100);
    start();
    t1 = setInterval("start()", 100);
}