var rand = function(start, end) {
    var n = end - start + 1;
    var r = Math.random() * n;
    var f = Math.floor(r);
    return f + start;
}

var kannji = ['魚', '肉', '卵', '牛乳', 'お茶', 'お酒', '野菜', '果物', '飲み物', '食べ物', '味噌汁', '寿司', '丼物',
    '和服', '水着', '教室', '公園', '病院', '郵便局', '駅', '映画館', '居酒屋', '自転車', '電車', '薬屋', '台湾',
    '窓', '鉛筆', '靴', '机', '暫く', '上着', 'お風呂', '結婚', '指輪', '手紙', '町', '生活', '料金',
    '携帯電話', '今朝', '警察', '海', '物語', '大学', '大丈夫', '代表', '作者', '作品', '和歌', '浪', '涙',
    '一番', '温度', '天気', '私', '彼女', '彼氏', '心', '猫', '熱', '犬', '兎', '鳥', '俳諧'
];

var kannjiromaji = ["sakana", "niku", "tamago", "gyuunyuu", "ocha", "osake", "yasai", "kudamono", "nomimono", "tabemono", "misoshiru", "sushi", "donbuributsu",
    "wafuku", "mizugi", "kyoushitsu", "kouen", "byuuin", "yuubinkyoku", "eki", "eigakan", "izakaya", "jitensha", "densha", "kusuriya", "taiwan",
    "mado", "enpitsu", "kutsu", "tsukue", "shibaraku", "uwagi", "ofuro", "kekkon", "yubiwa", "tegami", "machi", "seikatsu", "ryoukin",
    "keitaidenwa", "kesa", "keisatsu", "umi", "monogatari", "daigaku", "daijoubu", "daihyou", "sakusha", "sakuhin", "waka", "nami", "namida",
    "ichiban", "ondo", "tenki", "watashi", "kanojo", "kareshi", "kokoro", "neko", "netsu", "inu", "usagi", "tori", "haikai"
]

var hiragana = ['に', 'か', 'や', 'つ', 'け', 'て', 'も', 'の', 'み', 'き', 'こ', 'さ', 'だ', 'ね', 'と', 'わ']
var hiraganaromaji = ['ni', 'ka', 'ya', 'tsu', 'ke', 'te', 'mo', 'no', 'mi', 'da', 'ne', 'to', 'wa']
    // var timu = ['我想要找有roro音的單字', []]
var timu = '我想要找有roro音的單字'
var anscard = [0, 0, 0, 0, 0]
var ansnomove = anscard

$('#start').on('click', function() {
    var pipi = rand(0, hiragana.length - 1)
        // timu.replace('roro', hiraganaromaji[pipi])
    $('#title').text(timu.replace('roro', hiragana[pipi]))
    var popo = []
    while (popo.length < anscard.length) {
        var randomnumber = Math.floor(Math.random() * kannji.length)
        if (popo.indexOf(randomnumber) > -1) continue;
        popo[popo.length] = randomnumber;
    }
    for (var i = 0; i < anscard.length; i++) {
        $('#bt' + (i + 1)).text(kannji[popo[i]])
        $('#bt' + (i + 1)).removeClass("QAQ")
            // var result = kannjiromaji[popo[i]].includes(hiraganaromaji[pipi])  更改inciudes
        var result = kannjiromaji[popo[i]].includes(hiraganaromaji[pipi])
        if (result == true) {
            ansnomove[i] = 1
        } else {
            ansnomove[i] = 0
        }
    }
    anscard = [0, 0, 0, 0, 0]
})

$('.ppbtn').on('click', function(event) {
    var target = $(event.target);
    var btn_id = Number(event.target.id[2]) - 1
    if (anscard[btn_id] == 0) {
        target.addClass("QAQ")
    } else {
        target.removeClass("QAQ")
    }
    anscard[btn_id] = 1 - anscard[btn_id]
})


$('#btout').on('click', function() {
    var right = 0
    var wrong = 0
    for (var i = 0; i < anscard.length; i++) {
        if (anscard[i] == ansnomove[i]) {
            right++
        } else {
            wrong++
        }
    }
    BootstrapDialog.alert({
        title: '<div id="cya">鏘鏘！結果出爐啦！(๑´ㅂ`๑)</div>',
        message: '<div id="darpp">恭喜你，你對了 ' + right + ' 題！ヽ(・V・´)ゞ\n' + '哇，你錯了 ' + wrong + ' 題_(:3 ⌒ﾞ)_</div>',
        type: BootstrapDialog.TYPE_INFO
            // buttons: [{
            //     label: 'Title 1',
            //     action: function(dialog) {
            //         dialog.setTitle('Title 1');
            //     }
            // }, {
            //     label: 'Title 2',
            //     action: function(dialog) {
            //         dialog.setTitle('Title 2');
            //     }
            // }]
    });

})