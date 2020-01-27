var str ="APPLE apple Apple aPPLE AppLE AppLe";
var txt = str.replace(/([A-Z])\w+/gi,"google");
document.getElementById("test").innerHTML=txt;