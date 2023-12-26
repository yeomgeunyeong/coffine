$(function(){

    //팝업
    $(".pop").hide();
    $(".pop").slideDown("fast");

    $(".pop_inner button").click(function(){
        $(".pop").slideUp();
    })


    //메뉴영역
    $(".sub").hide();
    $(".gnb, .header_b").mouseenter(function(){
        $(".sub").stop().slideDown();
        $(".header_b").stop().animate({height:"400px"}, 500)
    })

    $(".header_b").mouseleave(function(){
        $(".sub").stop().slideUp();
        $(".header_b").stop().animate({height:"103px"}, 500)
    })



    //메인비쥬얼(슬라이드)영역
    $(".move").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
    })


    //section4 

    $(".s4_left_move").slick({
        autoplay:true,
        dots:true,
        arrows:false,
        slidesToScroll:2
    })



    //sns 탭 메뉴 
    $(".section5_inner ul li").click(function(e){
        e.preventDefault();
        $(".section5_inner ul li").toggleClass("on")
    })

})