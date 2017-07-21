var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var kuroshiro = require("kuroshiro"),
    kuso_ready = false;
kuroshiro.init(function(err) {
    // kuroshiro is ready
    kuso_ready = true;
    //測試用
    //var result = kuroshiro.convert('感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！', { mode: 'normal', to: 'romaji' });
    //console.log(result);
});

var staticPath = path.join(__dirname, '/public');
app.use(express.static(staticPath));

app.use(bodyParser.urlencoded());
app.get("/convert", function(req, res) {

    // 取得js送來的要被轉換的字
    var tt = req.query;
    console.log(tt.kana);

    // 吐回去
    if (kuso_ready)
        res.send(kuroshiro.convert(tt.kana, { mode: 'normal', to: 'romaji' }));
    else
        res.send("kuso not ready");
});

app.listen(3000, function() {
    console.log('listening');
});