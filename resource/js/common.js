'use strict';

$(function () {



    //header 
    
    //btn-mailing
    $(".btn-mailing").click(function(){
        $(this).toggleClass("on");
        $(this).next().toggle();
        $(".btn-search").removeClass("on");
        $(".btn-search").next().hide();
    });

    //btn-mailing
    $(".btn-search").click(function(){
        $(this).toggleClass("on");
        $(this).next().toggle();
        $(".btn-mailing").removeClass("on");
        $(".btn-mailing").next().hide();
    });

    //gnb
    // $(".depth1>ul>li>a").mouseover(function(){
    //     $(this).next().addClass("on");
    // });
    $(".depth1>ul>li").mouseover(function(){
        $(this).addClass("on");
        $(this).children("a").next().addClass("on");
        $(this).siblings().removeClass("on");
        $(this).siblings().children("a").next().removeClass("on");
        if($(this).hasClass("on")){
            $(this).children("a").next().addClass("on");
        }else{
            $(this).children("a").next().removeClass("on");
        }
    });
    $(".depth2 li").mouseout(function(){
        $(this).parent().removeClass("on");
        $(this).parent().parent().removeClass("on");
    });
    $(".depth2").mouseout(function(){
        $(this).removeClass("on");
    })
   
    

    //notice
    var swipernotice = new Swiper(".gnb .notice .swiper-container", {
        slidesPerView: 'auto',
        //spaceBetween: 10,
        slidesPerView: 1,
        loop: true,
        direction: "vertical",
        navigation: {
            nextEl: ".notice .swiper-button-next",
            prevEl: ".notice .swiper-button-prev",
        },
        //loopedSlides: 7,
        // observer: true,
        // observeParents: true,
        // observeSlideChildren: true,

        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },

    });

    //winger-menu
	$('.wingtab').click(function () {
		var activeTab = $(this).attr('data-tab');
		$('.wingtab').removeClass('current');
		$('.winger-content').removeClass('current');
		$(this).addClass('current');
		$('#' + activeTab).addClass('current');
	});

    $(".button-close").click(function(){
        var activeTab2 = $(this).parents().attr('data-tab');
        $('.wingtab').removeClass('current');
        $('.winger-content').removeClass('current');
    })
 
    
    var swiperwinger = new Swiper(".winger-content .swiper-container", {
        //spaceBetween: 10,
        slidesPerView: 4,
        slidesPerGroup: 4,
        loop: true,
        direction: "vertical",
        navigation: {
            nextEl: ".winger-arrow .swiper-button-next",
            prevEl: ".winger-arrow .swiper-button-prev",
        },
        //loopedSlides: 7,
       observer: true,
        observeParents: true,
        observeSlideChildren: true,

        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },

    });

    
    //visual-banner
    var swipervisual = new Swiper(".visual-banner .swiper-container", {
        slidesPerView: 'auto',
        //spaceBetween: 10,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".visual-banner .swiper-button-next",
            prevEl: ".visual-banner .swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        //loopedSlides: 7,
        // observer: true,
        // observeParents: true,
        // observeSlideChildren: true,

        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },

    });

    //footer banner
    var swiperfooter = new Swiper(".slide-banner .swiper-container", {
        slidesPerView: 'auto',
        spaceBetween: 10,
        slidesPerView: 7,
        loop: true,
        //loopedSlides: 7,
        // observer: true,
        // observeParents: true,
        // observeSlideChildren: true,
        // navigation: {
        //     nextEl: ".trip-list__arrow .swiper-button-next",
        //     prevEl: ".trip-list__arrow .swiper-button-prev",
        // },
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },

    });

    //tab-menu
    $('.content__tab ul.tab li').click(function () {
        var activeTab = $(this).attr('data-tab');
        $('.content__tab ul.tab li').removeClass('current');
        $('.content__tab .tabcontent').removeClass('current');
        $(this).addClass('current');
        $('#' + activeTab).addClass('current');

    });

    //tab-menu
	$('ul.tab li').click(function () {
		var activeTab = $(this).attr('data-tab');
		$('ul.tab li').removeClass('current');
		$('.tabcontent').removeClass('current');
		$(this).addClass('current');
		$('#' + activeTab).addClass('current');
	})


    var $menu = $('.floating-menu li.m'),
        $contents = $('.scroll'),
        $doc = $('html, body');

    // $(window).scroll(function () {

    //     var scltop = $(window).scrollTop();

    //     $.each($contents, function (idx, item) {
    //         var $target = $contents.eq(idx),
    //             i = $target.index(),
    //             targetTop = $target.offset().top;

    //         if (targetTop <= scltop) {
    //             $menu.removeClass('on');
    //             $menu.eq(idx).addClass('on');
    //         }
    //         if (!(200 <= scltop)) {
    //             $menu.removeClass('on');
    //         }
    //     })

    // });

    var btnTop = $('.btn-top');
    btnTop.on('click', 'button', function (e) {
        e.preventDefault();
        $doc.stop()
            .animate({
                scrollTop: 0
            }, 300)
    });





})







//Tweenmax를 이용한 header  

/*
$(function () {
    gnbSubMenu();

});


function gnbSubMenu() {
    var gnb = $(".gnb");
    var gnbChild = $(".gnb > div");
    var gnbTitle = gnb.find('a');

    gnbChild.on({
        mouseover: function () {
            $(this).addClass('on')
        },
        mouseleave: function () {
            $(this).removeClass('on');
        }
    });
    gnbTitle.mouseover(function () {
        headerOpen();
    });
    $('.gnb').mouseleave(function () {
        headerClose();
        $('body').css('overflow', 'initail')
    });

    function headerOpen() { //Tweenmax를 이용한 헤더 메뉴 슬라이드 open
        TweenMax.killAll();
        TweenMax.to($(".gnb"), .5, {
            height: 440,
            ease: 'easeOutExpo'
        });
        $(".gnb").addClass("on");
    }

    function headerClose() { //Tweenmax를 이용한 헤더 메뉴 슬라이드 close
        TweenMax.killAll();
        TweenMax.to($(".gnb"), .5, {
            height: 110,
            ease: 'easeOutExpo',
            onComplete: function () {
                $(".gnb").removeClass("on");
            }
        });
        $('.overlay').removeClass('on');
        $(".gnb-hover-bar").removeClass("on");
    }



    



}

*/