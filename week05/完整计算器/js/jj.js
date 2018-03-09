 

// 清空文本
function nn() {
    document.getElementById("done").value = "";
    document.getElementById("numf").value = "";
}
// sin function
function sinClick() {
   
    deg = document.getElementById("numf").value;
    sinV=Math.sin(Math.PI*(Number(deg)/180));
    sinVt=sinV.toFixed(3);
    document.getElementById("numf").value=sinVt;
}
// cos function 
function cosClick() {
  deg = document.getElementById("numf").value;
    sinV=Math.cos(Math.PI*(Number(deg)/180));
    sinVt=sinV.toFixed(3);
    document.getElementById("numf").value=sinVt;
}
// 退格函数
function back() {
    var chrs = document.getElementById("numf").value;
   document.getElementById("numf").value=chrs.substr(0,(chrs.length-1));
}
// 求开方函数
function sq() {
   var chrs = document.getElementById("numf").value;
   document.getElementById("numf").value=Math.sqrt(Number(chrs));
}

// 获取目标点击值

function putIn(event) {
    // 适配IE
     
    event = event || window.event;//适配火狐
    if (event.target) {
        // 获取目标点击
    cha = event.target.value;
    var chrs = document.getElementById("numf").value;
    chrs = chrs + cha;
    document.getElementById("numf").value = chrs;
    }
    else{
        // 获取IE目标点击
    cha = window.event.srcElement;
    var chrs = document.getElementById("numf").value;
    chrs = chrs + cha.value;
    document.getElementById("numf").value = chrs;
    }
}
// 计算过程
// 点击计算函数
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
            window.alert("除数不能为0，请输入正确格式");
            document.getElementById("done").value = "NAN";
        }
    } 
   
    else {
        alert("请输入正确格式")
    }
}