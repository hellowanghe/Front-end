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
    })