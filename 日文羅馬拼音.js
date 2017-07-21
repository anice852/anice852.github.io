// 先把別人寫的library窗口放進來
var kuro_ready = false;

// 請 jQuery 抓 button 元件，並且設定當 click 事件發生後，要執行的程式碼
$('button').on('click', function() {
    // 取得字元的input輸入
    var write = $('#input-text').val()

    // 將取得的字元轉成另一個字元
    // if (kuro_ready) {
    //     var result = kuroshiro.convert(write);

    //     // 顯示新字元
    //     $('#output-text').val(result)
    // }

    $.ajax({
        url: "https://oyster-test-site-tree852.c9users.io/convert",
        data: {
            "kana": write
        },
        dataType: "text",
        success: function(result) {
            // $("#div1").html(result);
            console.log(result);
            $('#output-text').val(result)
            $('#output-text').attr('readonly')
        }
    });
})

$(function() {
    // Handler for .ready() called.
    // kuroshiro.init(function(err) {
    //     // kuroshiro is ready
    //     console.log("kuroshiro is ready");
    //     kuro_ready = true;
    // });
});