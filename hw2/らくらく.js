var rand = function(start, end) {
    var n = end - start + 1;
    var r = Math.random() * n;
    var f = Math.floor(r);
    return f + start;
}

var kannji = ['魚', '肉', '卵', '牛乳', 'お茶', 'お酒', '野菜', '果物', '飲み物', '食べ物', '味噌汁', '寿司',
    '和服', '水着', '教室', '公園', '病院', '郵便局', '駅', '映画館', '居酒屋', '自転車', '電車', '薬屋', '台湾',
    '窓', '鉛筆', '靴', '机', '暫く', '上着', 'お風呂', '結婚', '指輪', '手紙', '町', '生活', '料金',
    '携帯電話', '今朝', '警察', '海', '物語', '大学', '大丈夫', '代表', '作者', '作品', '和歌', '浪', '涙',
    '一番', '温度', '天気', '私', '彼女', '彼氏', '心', '猫', '熱', '犬', '兎', '鳥', '俳諧',
    '布団', '太る', '達人', '場面', '場所', '今度', '最近', '成程', '富士山', '太陽', '星', '橋', '小説',
    '自分', '皆', '男性', '女性', '男の子', '女の子', '動物', '色', '番号', 'お金', '財布', '箱', '帽子',
    '眼鏡', '茶碗', '椅子', '夏休み', '言葉', '文章', '質問', '問題', '試験', '作文', '漢字', '平仮名', '片仮名',
    '日本語', '英語', '留学生', '先生', '元気', '風邪', '仕事', '名前', '誕生日', '使い方', '夢', '訳', '理由',
    '無理', '駄目', '火事', '事故', '試合', '自由', '大事', '普通', '不便', '関係', '必要', '真面目', '社会',
    '明日', '集る', '謝る', '安心', '案內', '意見', '以下 ', '一生懸命', '田舎', '美しい', '運転', '髪', '考える',
];

var kannjiromaji = ["sakana", "niku", "tamago", "gyuunyuu", "ocha", "osake", "yasai", "kudamono", "nomimono", "tabemono", "misoshiru", "sushi",
    "wafuku", "mizugi", "kyoushitu", "kouen", "byuuin", "yuubinkyoku", "eki", "eigakan", "izakaya", "jitensha", "densha", "kusuriya", "taiwan",
    "mado", "enpitu", "kutu", "tukue", "shibaraku", "uwagi", "ofuro", "kekkon", "yubiwa", "tegami", "machi", "seikatu", "ryoukin",
    "keitaidenwa", "kesa", "keisatu", "umi", "monogatari", "daigaku", "daijoubu", "daihyou", "sakusha", "sakuhin", "waka", "nami", "namida",
    "ichiban", "ondo", "tenki", "watashi", "kanojo", "kareshi", "kokoro", "neko", "netu", "inu", "usagi", "tori", "haikai",
    "futon", "futoru", "tatujin", "bamen", "basho", "kondo", "saikin", "naruhodo", "fujisan", "taiyou", "hoshi", "hashi", "shousetu",
    "jibun", "mina", "dansei", "josei", "otokonoko", "onnanoko", "doubutu", "iro", "bangou", "okane", "saifu", "hako", 　"boshi",
    "megane", "chawan", "isu", "natuyasumi", "kotoba", "bunshou", "shitumon", "mondai", "shiken", "sakubun", "kanji", "hiragana", "katakana",
    "nihongo", "eigo", "ryuugakusei", "sensei", "genki", "kaze", "shigoto", "namae", "tanjoubi", "tukaikata", "yume", "wake", "riyuu",
    "muri", "dame", "kaji", "jiko", "shiai", "jiyuu", "daiji", "futuu", "fuben", "kankei", "hituyou", "majime", "shakai",
    "ashita", "atumaru", "ayamaru", "anshin", "annai", "iken", "ika ", "isshoukenmei", "inaka", "utukushii", "unten", "kami", "kangaeru"
]

var hiragana = ['か', 'き', 'く', 'け', 'こ',
    'さ', 'し', 'す', 'せ', 'そ',
    'た', 'ち', 'つ', 'て', 'と',
    'な', 'に', 'ぬ', 'ね', 'の',
    'ま', 'み', 'む', 'め', 'も',
    'は', 'ひ', 'ふ', 'へ', 'ほ',
    'ら', 'り', 'る', 'れ', 'ろ',
    'わ', 'ん'
]
var hiraganaromaji = ["ka", "ki", "ku", "ke", "ko",
        "sa", "shi", "su", "se", "so",
        "ta", "chi", "tu", "te", "to",
        "na", "ni", "nu", "ne", "no",
        "ma", "mi", "mu", "me", "mo",
        "ha", "hi", "fu", "he", "ho",
        "ra", "ri", "ru", "re", "ro",
        "wa", "n"
    ]
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