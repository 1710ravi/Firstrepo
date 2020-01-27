$(window).load(function() {
  $(".col-xs-12").twentytwenty();
});


var keyList = "abcdefghijklmnopqrstuvqxyz1234567890!@#$%&?/-+*.|";
var temp = "";
function generatepass(plength){
    temp ="";
    for(i=0;i<=plength;i++){
        temp += keyList.charAt(Math.floor(Math.random()*keyList.length));
    }
    return temp;
}
function populateform(enterlength){
    document.passGen.output.value = generatepass(enterlength);
}