$('#insert').on('click', function() {
    var data = {
        name: $('#InputProductName').val(),
        price: +$('#InputProductPrice').val(),
        count: +$('#InputProductCount').val(),
        image: $('#InputProductImage').val()
    }
    $.post("http://js2017-hw2.kchen.club/insert", data, function(response) {
        if (response) {
            if (response.result) {
                $('#message').text('新增成功');
            } else {
                $('#message').text('新增失敗 (' + response.data + ')');
            }
        } else {
            $('#message').text('新增失敗');
        }
        $('#dialog').modal('show');
        console.log(response);
    }, "json");
})

var MAX_SHOW_NUM = 30
var pp = null
var dar_pp = function(di = 0) {
    for (var i = 0; i < MAX_SHOW_NUM; i++) {

        $('#product-list > :nth-child(' + (i + 1) + ') .item h3.title').text(pp[i + di * MAX_SHOW_NUM]["name"])
        $('#product-list > :nth-child(' + (i + 1) + ') .item p.price').text("NT$ " + pp[i + di * MAX_SHOW_NUM]["price"])

        var image_elem = $('#product-list > :nth-child(' + (i + 1) + ') .item img.thumb')

        image_elem
            .on("error", function() {
                console.log('error !\n set default image instead')
                $(this).attr("src", "img/error.jpg")
                $(this).off('error')
            })
            .attr({
                src: pp[i + di * MAX_SHOW_NUM]["image"]
            })
    }
}
var empty = true
var cur_pp = 0
var d = 0

$('#query').on('click', function() {
    $.get("http://js2017-hw2.kchen.club/query", function(response) {
        if (response) {
            if (response.result) {
                pp = response.data
                var template =
                    "<div class=\"col-*\">" +
                    "<div class=\"item\">" +
                    "<img class=\"thumb\" src=\"http://i.imgur.com/pmNEVF0.jpg\">" +
                    "<h3 class=\"title\">小米手環 2</h3>" +
                    "<p class=\"price\">NT$ 865</p>" +
                    "</div>";

                if (empty) {
                    for (var i = 0; i < MAX_SHOW_NUM; i++)
                        $('#product-list').append(template)

                }

                dar_pp(0)
                cur_pp = 0

                var nu = '<li class="page-item"><a class="page-link" href="#">pp</a></li>';

                var ed = "<li class=\"page-item\" id=\"Next\">" +
                    "<a class=\"page-link\" href=\"#\" aria-label=\"Next\">" +
                    "<span aria-hidden=\"true\">&raquo;</span>" +
                    "<span class=\"sr-only\">Next</span>" +
                    "</a>"
                "</li>";
                d = Math.ceil(pp.length / MAX_SHOW_NUM)
                if (empty) {
                    for (var i = 0; i < d; i++) {
                        $('#qaq ul').append(nu.replace('pp', i + 1))
                    }
                    $('#qaq ul').append(ed)
                    $('#Next').on('click', function(e) {
                        if (cur_pp == d - 1)
                            return
                        cur_pp++
                        dar_pp(cur_pp)
                    })
                    empty = false
                }

                for (var i = 0; i < d; i++) {
                    $('#qaq ul li:nth-child(' + (i + 2) + ')').on('click', function(e) {
                        // console.log('Fire')
                        // console.log(e.target.innerHTML - 1)
                        cur_pp = e.target.innerHTML - 1
                        dar_pp(cur_pp)

                    })
                }

                $('#product-list').removeAttr("hidden")
                $('#qaq').removeAttr("hidden")

            } else {
                $('#message').text('查詢失敗 (' + response.data + ')');
                $('#dialog').modal('show');
            }
        } else {
            $('#message').text('查詢失敗');
            $('#dialog').modal('show');
        }
        // console.log(response);
    }, "json");
})

$('#Previous').on('click', function(e) {
    // console.log('PPPPPPP ' + cur_pp)
    if (cur_pp == 0)
        return
    cur_pp--
    dar_pp(cur_pp)
})