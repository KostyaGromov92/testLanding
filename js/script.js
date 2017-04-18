/**
 * Created by Костя on 09.04.2017.
 */

$(document).ready(function () {
    var newVal = $(window).scrollTop();
    var arr = {};
    $(".burger-menu").click(function () {
        $(this).toggleClass("menu-on");
        if($(this).hasClass('menu-on')) {
            $('.header__menu').css('display','block');
            $(window).scrollTop(0);
            $(this).css({
                'position' : 'absolute',
                'top' : '40px',
                'right' : '15px'
            });
            $('html').css('overflow','hidden');

        } else {
            $('.header__menu').css('display','none');
            $(this).css({
                'position' : 'relative',
                'top' : '50%',
                'right' : '0px'
            });
            $('html').css('overflow','visible');
            $('html, body').scrollTop(newVal);
        }
    });

    $(window).resize(function() {
        if($(".burger-menu").css('display') == 'none') {
            $('.header__menu').css('display','flex');
        } else {
            $('.header__menu').css('display','none');
        }
    });

    $(".members__item__img").mouseover(function() {
        $(this).parent().find($('.members__item__mail a')).css("color","#00a99d");
    }).mouseout(function() {
        $(this).parent().find($('.members__item__mail a')).css("color","#aaaaaa");
    });

});