$('#nav').mouseenter(function(){
    $('#nav').stop().animate({height: 100});
    $('.hide-box').css({opacity: 1});
})
$('#nav').mouseleave(function(){
    $('.hide-box').css({opacity: 0});
    $('#nav').stop().animate({height: 30});
})

$('.footer-title').click(function(){
        let slide = $(this).next('.slide');
        if(slide.css("display") == 'none') {
            slide.slideDown();
            $('footer').css({height: 950});
            $(this).children('.icon').css({'transform': 'rotate(180deg)'})
        } else {
            slide.slideUp();
            $(this).children('.icon').css({'transform': 'rotate(0deg)'})
        }
    })