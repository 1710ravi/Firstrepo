//try catch
//function myError(){
//   
//    var x, msg;
//    msg = document.getElementById("msg");
//    msg.innerHTML="";
//    
//    x = document.getElementById("some").value;
//    
//    try{
//        if(x=="") throw "Please choose a number";
//        if(isNaN(x)) throw "Only number are allowed";
//        if(x<4) throw "Please choose a number greater than 3";
//    }
//    catch(err){
//        msg.innerHTML=" Error is "  +  err;
//              }
//    
//    finally{
//        document.getElementById("some").value="";
//           }
//}
var  number1 =45;
var number2 =34;
var bool = true;
var str ="something";
console.log(number1/str);

console.log((2+2).toString());
console.log(number(bool));
console.log(parseInt("100 years later"));

console.log(Math.random());
console.log(Math.random()*100);
console.log(Math.min(1,3,5,-50,-90,100));
console.log(Math.max(1,3,5,-50,-90,100));
console.log(Math.round(4.7));
console.log(Math.PI);