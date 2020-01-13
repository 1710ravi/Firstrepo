$(function(){
    $("h1").click(function(){
        $(".abc").slideToggle(1000,function(){
            alert("Malware Detected!")
        });
    });
});


$(function(){
    $("h1").click(function(){
        $(".abc").css('background-color','purple');
    });
});