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
                        newstitle: htmlspecialchars($('#newstitle').val()),
                        newstype: htmlspecialchars($('#newstype').val()),
                        newsimg: htmlspecialchars($('#newsimg').val()),
                        newstime: htmlspecialchars($('#newstime').val()),
                        newssrc: htmlspecialchars($('#newssrc').val()),
                    }; //person={firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"};
                    $.ajax({
                        url: '/admin/insert',
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
                            url: '/admin/delete',
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
                    url: '/admin/curr',
                    type: 'get',
                    data: { 'newsid': updateId },
                    datatype: 'json',
                    success: function(data) {
                        console.log(data);
                        $('#unewstitle').val(htmlspecialchars_decode(data[0].newstitle));
                        $('#unewstype').val(htmlspecialchars_decode(data[0].newstype));
                        $('#unewsimg').val(htmlspecialchars_decode(data[0].newsimg));
                        $('#unewssrc').val(htmlspecialchars_decode(data[0].newssrc));
                        var utime = data[0].newstime.split('T')[0];
                        $('#unewstime').val(utime);

                    }
                }); //ajax end;
                $('#updateModal #confirmupdate').click(function(e) {
                    $.ajax({
                        url: '/admin/update',
                        type: 'post',
                        data: {
                            'newstitle':htmlspecialchars($('#unewstitle').val()) ,
                            'newstype': htmlspecialchars($('#unewstype').val()),
                            'newsimg': htmlspecialchars($('#unewsimg').val()),
                            'newssrc': htmlspecialchars($('#unewssrc').val()),
                            'newstime': htmlspecialchars($('#unewstime').val()),
                            'id': htmlspecialchars(updateId),
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
                    url: '/admin/getnews',
                    type: 'get',
                    datatype: 'json',
                    success: function(data) {
                        $.each(data, function(index, value) {
                                //data.foreach(item,index)
                                var $table = $("#newstable tbody");
                                var $tr = $("<tr></tr>").appendTo($table);
                                var $td = $("<td></td>").html(value.newsid).appendTo($tr);
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
            function htmlspecialchars_decode(str) {
                str = str.replace(/&amp;/g, '&');
                str = str.replace(/&lt;/g, '<');
                str = str.replace(/&gt;/g, '>');
                str = str.replace(/&quot;/g, "''");
                str = str.replace(/&#039;/g, "'");
                return str; 
            }

            function htmlspecialchars(str) {
                str = str.replace(/&/g, '&amp;');
                str = str.replace(/>/g, '&gt;'); 
                str = str.replace(/</g, '&lt;');
                str = str.replace(/"/g, '&quot;');
                 str = str.replace(/'/g, '&#039;'); 
                return str; 
            }
                    //document.ready
                });
