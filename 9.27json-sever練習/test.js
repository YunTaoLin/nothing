// var req = new XMLHttpRequest;
// req.open("GET", "http://localhost:3000/records");
// req.onload = function() {
//     console.log(req.responseText)
// }
// req.send();

$(function() {
    $.ajax({
        url: 'http://localhost:3000/records',
        method: 'get',
        datatype: 'json',
        data: {}
    }).done(function(res) {
        $('#list').empty();
        res.forEach(item => {
            $('#list').append("<li>" + "編號： " + item.id + "</br>名稱： " + item.spot_name + "</li>");
        });

    }).fail(function(err) {
        console.log(err)

    });

    $('#postarea > button').on("click", function() {
        let data = $('#postarea > input').val().trim();
        if (data) {
            $.ajax({
                url: 'http://localhost:3000/records',
                method: 'post',
                datatype: 'json',
                data: {
                    spot_name: $('#postarea > input').val()
                }
            })
        }
    });
    $('#delarea > button').on("click", function() {
        let del_id = $('#delarea > input').val().trim();
        if (del_id) {
            $.ajax({
                url: 'http://localhost:3000/records/' + del_id,
                method: 'delete',
                datatype: 'json',
                data: {}
            })
        }
    });









})