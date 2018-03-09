// 背景图片缓存
var tem;
var tem2;
var pic;
var picc;
var picpre;
// 开始载入缓存背景图片
if (localStorage.img) {
	tem3=localStorage.isrc;
	slocal=localStorage.img;
	$("body").css("background",slocal);
	var preu="url(./"+tem3+")";
	$(".preview-UI").css("background-image",preu);
};
if (localStorage.isrc=="") {
	$(".content img").attr("src","img/bd_logo1_31bdc765.png");
}
// 换肤按钮
$("#change-skin").on("click",function() {
	$("#skin-layer").slideDown(500);
});
$("#up-skin").on("click",function() {
	$("#skin-layer").slideUp(500);
});
// 点击换肤
$("#skin-photo li").on("click",function() {
	$(".content img").attr("src","img/logo_white_fe6da1ec.png");
	$(".preview-UI img").css("left","0px");
	pic=$(this).find("img").attr("src");
	localStorage.isrc=pic;
	localStorage.img2=pic;
	picc=$("body").css("background");
	var tem="url(./"+pic+")"+" "+"no-repeat"+" "+"fixed";
	//alert(tem);
	localStorage.img=tem;
	$(".preview-UI").css("background",tem2);
	$("body").css("background",tem);
	$(".opactiy-set").css("display","block");
	$("#no-skin").css("display","block");
});
// 皮肤预览
$("#skin-photo li").on("mouseover",function() {
	if (localStorage.isrc!=="") {}
	$(".preview-UI img").css("left","0px");
	picpre=$(this).find("img").attr("src");
	var tem2="url(./"+picpre+")";
	
	$(".preview-UI").css("background-image",tem2);
	
});$("#skin-photo li").on("mouseout",function() {
	//alert(pic);
	var bk=localStorage.isrc;
	var bkk=localStorage.img2;
	if (bk!=="") {var bks="url("+"./"+bk+")";
	//alert(bks);
	$(".preview-UI").css("background-image",bks);}
	else{
		$(".preview-UI img").css("left","-275px");
		$(".preview-UI").css("background-image",bkk);
	}
	
	
});
// 侧边栏
$("#more-show").on("mouseover",function() {
	
	$(".R-side").css("display","block");
});$(".R-side").on("mouseover",function() {
	
	$(".R-side").css("display","block");

});
$(".R-side").on("mouseout",function() {
	
	$(".R-side").css("display","none");

});
// 去掉换肤
$("#no-skin").on("click",function() {
	$(".content img").attr("src","img/bd_logo1_31bdc765.png");

	$(".preview-UI img").css("left","-276px");
	$(".preview-UI").css("background-image","");
	$("body").css("background","#fff");
	localStorage.img="#fff";
	localStorage.isrc="";
	localStorage.img2="";
	$(".opactiy-set").css("display","none");
	$("#no-skin").css("display","none");
});
//tab切换
$("#tui-jian").on("click",function() {
	$("#tab .defult").css("background","");
	$("#tui-jian").css("background","rgba(248,248,248,.4)")
	$(".tui-jian").css("display","block")
	$(".dao-hang").css("display","none")
	$(".shi-pin").css("display","none")
	$(".gou-wu").css("display","none")
});
$("#dao-hang").on("click",function() {
	$("#tab .defult").css("background","");
	$("#dao-hang").css("background","rgba(248,248,248,.4)")
	$(".tui-jian").css("display","none")
	$(".dao-hang").css("display","block")
	$(".shi-pin").css("display","none")
	$(".gou-wu").css("display","none")
});
$("#shi-pin").on("click",function() {
	$("#tab .defult").css("background","");
	$("#shi-pin").css("background","rgba(248,248,248,.4)")
	$(".tui-jian").css("display","none")
	$(".dao-hang").css("display","none")
	$(".shi-pin").css("display","block")
	$(".gou-wu").css("display","none")
});$("#gou-wu").on("click",function() {
	$("#tab .defult").css("background","");
	$("#gou-wu").css("background","rgba(248,248,248,.4)")
	$(".tui-jian").css("display","none")
	$(".dao-hang").css("display","none")
	$(".shi-pin").css("display","none")
	$(".gou-wu").css("display","block")
});
// 回到顶部
$(".go-top").on("click",function() {
	$("body").scrollTop(0);
});
$(window).scroll( function() { 
	var svalue=$("body").scrollTop();
	if (svalue>100) {
		$(".go-top").css("display","block");
	}else{
		$(".go-top").css("display","none");
	}

 } );