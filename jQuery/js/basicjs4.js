//$(function(){
//    $(".btn1").click(function(){
//        alert("This is: " + $("h1").text());
//    });
//});

//Giving Some Upgradations

$(function(){
    $(".btn1").click(function(){
       $("h1").text("I am learning Jquery!");
    });
});





//$(function(){
//    $(".btn2").click(function(){
//        alert("HTML Is :" + $("h1").html());
//    });
//});

//Giving Some Upgradations

$(function(){
    $(".btn2").click(function(){
        $("h1").html("<i>I am getting good at Jquery!</i>");
    });
});




//$(function(){
//    $(".btn3").click(function(){
//        alert("Value is:" + $("input").val());
//    });
//});

//Giving Some Upgradations

$(function(){
    $(".btn3").click(function(){
      $("input").val("India");
    });
});





//$(function(){
//    $(".btn4").click(function(){
//        alert("Value is:" + $("a").attr("href"));
//    });
//});

//Giving Some Upgradations

$(function(){
    $(".btn4").click(function(){
        $("a").attr("href","http://www.yahoo.com");
    });
});


//Some Other Ways

$(function(){
    $(".btn4").click(function(){
        $("a").attr({
            "href": "http://bing.com",
            "title": "Going To Bing Site"
        });
    });
});