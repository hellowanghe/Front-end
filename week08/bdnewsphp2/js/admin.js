//打开后台页面，发送请求，刷新新闻列表；
//新闻后台管理的js脚本。
$(document).ready(function() {

    refreshNews();
    var $newsTable = $("#newstable tbody");
    //添加新闻的功能
    $('#btnsubmit').on('click', function(e) {
        e.preventDefault();
        //输入判断
        if ($('#newstitle').val() === "" || $('#newstype').val() === "" || $('#newsimg').val() === "" || $('#newstime').val() === "") {
            if ($('#newstitle').val() === "") {
                $('#newstitle').parent().addClass('has-error');

            } else {
                $('#newstitle').parent().removeClass('has-error');
            }
            if ($('#newsimg').val() === "") {
                $('#newsimg').parent().addClass('has-error');

            } else {
                $('#newsimg').parent().removeClass('has-error');
            }
            if ($('#newstime').val() === "") {
                $('#newstime').parent().addClass('has-error');

            } else {
                $('#newstime').parent().removeClass('has-error');
            }
        } else {
            //提交添加
            var jsonNews = {
                newstitle: $('#newstitle').val(),
                newstype: $('#newstype').val(),
                newsimg: $('#newsimg').val(),
                newstime: $('#newstime').val(),
                newssrc: $('#newssrc').val()
            }; //person={firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"};
            $.ajax({
                url: './server/insert.php',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                success: function(data) {
                    console.log(data);
                  $('#newstitle').val("");
                    $('#newsimg').val("");
                    $('#newssrc').val("");
                    refreshNews();
                    
                }

            });
            //
        };



    });
    //新闻的功能结束

    //删除新闻的功能
    var deleteId = null;
    $newsTable.on("click", ".btn-danger", function(e) {
        $("#deleteModal").modal('show');
        deleteId = $(this).parent().prevAll().eq(4).html();
        $('#deleteModal #confirmDelete').click(function(e) {
            if (deleteId) {
                // var dele=new Array(newsid:deleteId)
                $.ajax({
                    url: './server/delete.php',
                    type: 'post',
                    data: { 'newsid': deleteId },
                    datatype: 'json',
                    success: function() {
                        //console.log("success");
                        $('#deleteModal').modal('hide');
                        refreshNews();
                    },
                    error: function() {
                        console.log('error');
                    }
                })
            }; //ifend

        });

    }); //bind click for delete button
    //删除新闻的功能结束

    
    //修改新闻的功能
    $newsTable.on('click', '.btn-primary', function(e) {
        $('#updateModal').modal('show');
        updateId = $(this).parent().prevAll().eq(4).html();
        $.ajax({
            url: './server/curr.php',
            type: 'get',
            data: { 'newsid': updateId },
            datatype: 'json',
            success: function(data) {
                console.log(data);
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewssrc').val(data[0].newssrc);
                $('#unewstime').val(data[0].newstime);

            }
        }); //ajax end;
        $('#updateModal #confirmupdate').click(function(e) {
            $.ajax({
                url: './server/update.php',
                type: 'post',
                data: {
                    'newstitle': $('#unewstitle').val(),
                    'newstype': $('#unewstype').val(),
                    'newsimg': $('#unewsimg').val(),
                    'newssrc': $('#unewssrc').val(),
                    'newstime': $('#unewstime').val(),
                    'id': updateId,
                },
                datatype: 'json',
                success: function(data) {
                    // console.log(data);
                    refreshNews();
                    $('#updateModal').modal('hide');
                    
                }
            });
        });

    }); //bind click for update button


    //刷新函数开始。
    function refreshNews() {
        //empty table
        var $newsTable = $("#newstable tbody");
        $newsTable.empty();
        $.ajax({
            url: './server/getnews.php',
            type: 'get',
            datatype: 'json',
            success: function(data) {
                $.each(data, function(index,value) {
                    //data.foreach(item,index)
                    var $table = $("#newstable tbody");
                    var $tr = $("<tr></tr>").appendTo($table);
                    var $td = $("<td></td>").html(value.id).appendTo($tr);
                    var $td = $("<td></td>").html(value.newstitle).appendTo($tr);
                    var $td = $("<td></td>").html(value.newstype).appendTo($tr);
                    var $td = $("<td></td>").html(value.newsimg).appendTo($tr);
                    var $td = $("<td></td>").html(value.newssrc).appendTo($tr);
                    var $td = $("<td></td>").appendTo($tr);
                    var $button = $("<button></button>").addClass('btn btn-primary btn-xs').html('修改').appendTo($td);
                    var $button = $("<button></button>").addClass('btn btn-danger btn-xs').html('删除').appendTo($td);

                })
                //refreshNews();
            },
            error: function(xhr) {
                console.log("failed");
            }
        });

    }
    //刷新函数结束
    //document.ready
});
