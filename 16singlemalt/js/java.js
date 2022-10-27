$(document).ready(function(){
    $(".modal").click(function(){       
        $("#find").slideToggle();
    });    
    $("#close_btn").click(function(){       
        $("#find").slideUp();  
    });   
    $(".gnb>li").hover(function(){
        $(this).children(".submenu").stop().slideDown();
    },function(){
        $(this).children(".submenu").stop().slideUp();
    });
    $(".bxslider").bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 1440,
        infiniteLoop: true,
        speed : 1000
    });
});

