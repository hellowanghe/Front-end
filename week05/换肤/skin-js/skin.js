
function redChange() {
	var cookie="first";
	document.cookie=cookie;
    document.getElementById("bdid").style.backgroundColor = "#CE5391";
    document.getElementById("ulchange").style.backgroundColor = "#3DB980";
    document.getElementById("bot").className = "change-color2";
  
}

function yellowChange() {
var cookie="second";
	document.cookie=cookie;
    document.getElementById("bdid").style.backgroundColor = "#E7FF66";
    document.getElementById("ulchange").style.backgroundColor = "#E0F916";
    document.getElementById("bot").className = "change-color3";

}
function blueChange() {
	var cookie="third";
	document.cookie=cookie;
    document.getElementById("bdid").style.backgroundColor = "#8EB9D8";
    document.getElementById("ulchange").style.backgroundColor = "#61C4D4";
    document.getElementById("bot").className = "change-color4";

}
function Redcookie() {
	
    if (document.cookie=="first") {
        redChange();
    }else if (document.cookie=="second") {
        yellowChange();
    }else if (document.cookie=="third") {
        blueChange();
    }else{
        
    }
}
