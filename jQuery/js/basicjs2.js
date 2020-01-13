//$(function(){
//    $("h1").click(function(){
//        $("img").fadeOut(1000);
//    });
//});
$(function(){
    $("h1").click(function(){
        $(".a").animate({
            height:"+=100px",
            width:"+=100px"
           
        },1000);
    });
});