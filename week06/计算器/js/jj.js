function nn() {

    document.getElementById("done").value = "";
document.getElementById("numf").value = "";
}

function ff() {
    cha = event.target;

    var chrs = document.getElementById("numf").value;
    //  var str1=chrs;
    // chrs=str1+cha.value;
    chrs = chrs + cha.value;
    document.getElementById("numf").value = chrs;
        // document.write(chrs)

}

function cc() {
    x = document.getElementById('numf').value;
    var str = x;
    var y;
    var z;
    var en;
    //判断乘法
    if (str.indexOf("*") > 0) {
        y = str.substring(0, str.indexOf("*"))
        z = str.substring(str.indexOf("*") + 1)
        en = y * z;
        document.getElementById("done").value = en;
    } //判断加法
    else if (str.indexOf("+") > 0) {
        y = str.substring(0, str.indexOf("+"))
        z = str.substring(str.indexOf("+") + 1)
        en = (Number(y) + Number(z));
        document.getElementById("done").value = en;
    } //判断减法 
    else if (str.indexOf("-") > 0) {
        y = str.substring(0, str.indexOf("-"))
        z = str.substring(str.indexOf("-") + 1)
        en = (Number(y) - Number(z));
        document.getElementById("done").value = en;
    } //判断除法
    else if (str.indexOf("/") > 0) {
        y = str.substring(0, str.indexOf("/"))
        z = str.substring(str.indexOf("/") + 1)
        if (z > 0) {
            en = (Number(y) / Number(z));
            document.getElementById("done").value = en;
        } else {
            alert("除数不能为0，请输入正确格式")
        }
    } else {
        alert("请输入正确格式")
    }
}