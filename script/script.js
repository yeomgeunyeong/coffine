$(function(){

    $(".main > li, .sub_bg").hover(function(){
        $(".sub, .sub_bg").stop().slideDown();
    }, function(){
        $(".sub, .sub_bg").stop().slideUp();
    })



    //이미지 슬라이드

    $(".move").slick({
        autoplay:true,
        autoplaySpeed:2000,
        fade:true,
        dots:true,
        arrows:true,
    })


    $(".box1").slick({
        autoplay:true,
        autoplaySpeed:1000,
        slidesToShow:1,
        slidesToScroll:1,
        // fade:true,
    })

})
