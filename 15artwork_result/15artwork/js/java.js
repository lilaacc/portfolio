$(document).ready(function(){
    setInterval(() => {
        $(".slide").animate({"margin-top":"-350px"},function(){;
        $(".slide>div:first-child").appendTo(".slide");
        $(".slide").css("margin-top","0");
    });
    },2000);
});