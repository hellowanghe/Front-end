
// 课程列表动画
var chg = $("#changeC").attr("class");
	
   var chan=function() {$(".main_list_box ul li").on("mouseover", function() { 
       
        $(this).find(".lesson_info ").css({ animation: "slideUp 0.2s linear", height: "158px" });
        $(this).find(".lesson_info p").css({ animation: "PslideUp 0.2s linear", height: "40px" });
        $(this).find(".lessonplay").css({ opacity: "1", background: "rgba(0, 0, 0, 0.36)" });
        $(this).find(".lesson_info .learn-number").css({ display: "block" });
        $(this).find(".lesson_info .zhongji").css({ display: "block" });
      });
          
    $(".main_list_box ul li").on("mouseout", function() {
        $(this).find(".lesson_info").css({ animation: "slideDown 0.2s linear", height: "90px" });
        $(this).find(".lesson_info p").css({ animation: "PslideDown 0.2s linear", height: "0px", overflow: "hidden" });
        $(this).find(".lesson_info .learn-number").css({ display: "none" });
        $(this).find(".lesson_info .zhongji").css({ display: "none" });
        $(this).find(".lessonplay").css({ opacity: "0", background: "rgba(0, 0, 0,)" });
      });
} 
$(chan());


 

// 回到顶部gotop
$(".gotop .arrow").bind("click", function() {
    $("body").scrollTop(0);
});
// 导航栏搜索按钮动画
$(document).ready(function() {
        $(".search-icon").click(function() {
            $(".searchboxscale").css("animation", "animation1 0.4s linear")
            $(".searchboxscale").css("transform-origin", "right")
            $(".searchboxscale").css("transform", "scale(1)")

        })
        $(".close-icon").click(function() {
            $(".searchboxscale").css("animation", "")
            $(".searchboxscale").css("transform-origin", "right")
            $(".searchboxscale").css("transform", "scale(0)")
        })
    });
    // 课程列表排版切换


// 长条排版按钮
var chg = $("#changeC").attr("class");
$("#changeP").on("click", function() {

        $(".main_list_box ul li").off();// 移除方块排版动画
        // 添加lessonplay的mouseover和mouseout事件
       $(".main_list_box ul li").on("mouseover", function() {
         $(this).find(".lessonplay").css({ opacity: "1", background: "rgba(0, 0, 0,0.36)" });
        });
       $(".main_list_box ul li").on("mouseout", function() {
         $(this).find(".lessonplay").css({ opacity: "0", background: "rgba(0, 0, 0,0.36)" });
        });
       // 事件结束
        $(".main_list_box ul li").find(".lesson_info p").css({ height: "14px", overflow: "hidden" });//调整p的css
        $("#changeC").removeClass("main_list_box");
        $("#changeC").addClass("mlb_t");
});
// 方块排版按钮
$("#changeL").on("click", function() {

    var chg = $("#changeC").attr("class");
    if (chg == "mlb_t") {
        $(".mlb_t ul li").find(".lesson_info p").css({ height: "0px", overflow: "hidden" });//调整p的css
        $("#changeC").removeClass("mlb_t");
        $("#changeC").addClass("main_list_box");
        $(chan());
    }
});
