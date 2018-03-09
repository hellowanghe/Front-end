// 新闻主页的javascript
$(document).ready(function() {
	var type='精选';
	console.log(type);
	refreshNews(type);
$('nav a').on('click',function(event) {
	event.preventDefault();
	type=$(this).html();
	console.log(type);
	refreshNews(type);
});
//首页新闻
function refreshNews(type) {
	console.log(type);
	var $lists=$("article ul");
	$lists.empty();
	$.ajax({
		url:'/news',
		type:'get',
		datatype:'json',
		data:{'newstype':type},
		success:function (data) {
			console.log(data);
			$.each(data,function(key,value) {
				console.log(value.id);
			var $lists=$("article ul");
			var $list=$("<li></li>").addClass("news-list").prependTo($lists);
			var $newsImg=$("<div></div>").addClass("newsimg").appendTo($list);
			var $img=$("<img>").attr("src",value.newsimg).appendTo($newsImg);
			var $newsContent=$("<div></div>").addClass("newscontent").appendTo($list);
			var $h1=$("<h1></h1>").html(value.newstitle).appendTo($newsContent);
			var $p=$("<p></p>").appendTo($newsContent);
			var $newsTime=$("<span></span>").addClass("newstime").html(value.newstime).appendTo($p);
			var $newsSrc=$("<span></span>").addClass("newssrc").html(value.newssrc).appendTo($p);})
			
			}
			
		})
};//首页新闻结束

	});
