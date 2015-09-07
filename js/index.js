var screenWidth,screenHeight;
var foodSwiper,mainSwiper;
$(function(){
    screenHeight = $("body").height();
    screenWidth = $("body").width();
    $(window).resize(function(){
        screenHeight = $("body").height();
        screenWidth = $("body").width();
        resizer();
    })        
    foodSwiper = new Swiper('#food', {
        pagination: '#foodPagin',
        paginationClickable: true,
        keyboardControl: true,
        mousewheelForceToAxis: true,
        direction: 'horizontal',
        onInit: function(foodSwiper){
            swiperAnimateCache(foodSwiper);
            //swiperAnimate(foodSwiper);
        },
        onSlideChangeStart: function(foodSwiper){
            $("#food").find("div.ani").each(function(){
                $(this).removeClass("bounce animated");     //该死的swiper留下的bug
            })
        },
        onSlideChangeEnd: function(foodSwiper){
            swiperAnimate(foodSwiper);
        }, 
        onTransitionEnd: function(foodSwiper){ 
            swiperAnimate(foodSwiper);
        }
    });
    mainSwiper = new Swiper('#main', {
        keyboardControl: true,
        mousewheelControl: true,
        direction: 'vertical',
        onInit: function(mainSwiper){
            swiperAnimateCache(mainSwiper);
            //swiperAnimate(mainSwiper);
        }, 
        onSlideChangeEnd: function(mainSwiper){ 
            swiperAnimate(mainSwiper);
        },
        onTransitionEnd: function(mainSwiper){ 
            swiperAnimate(mainSwiper);
        }
    });
    $(".arrow").click(function(){
        mainSwiper.slideNext();
    })
});
window.onload = function(){
    resizer();
    $("#loading").hide();
    var music = $("#music")[0];
    music.currentTime = 2;
    music.play();
    setTimeout("swiperAnimate(mainSwiper)",500);
}
function resizer(){
    var height;
    $(".centerBlock").each(function(){
        height = $(this).height();            
        $(this).css("margin-top",(screenHeight-height)/2 + "px");
    })
    var arrowWidth = $(".arrow").width();
    var containerWidth = $(".swiper-container").width();
    $(".arrow").css("left",(containerWidth-arrowWidth)/2);
}
