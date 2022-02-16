'use strict';

$(function () {
    uploadFile();
    
    $("input[type='text'], textarea").on('input', function(){
        if($(this).val() == ''){
            $(this).removeClass('fill');
        }else{
            $(this).addClass('fill');
        }
    })
    $("input[type='checkbox']").on('input', function(){
        if($(this).is(":checked") == true){
            $(this).next('label').find('input').attr('disabled', false);
            $(this).parents('.items.full').next('.full').find('textarea').attr('disabled', false);
        }
        if($(this).is(":checked") == false){
            $(this).next('label').find('input').attr('disabled', true);
            $(this).parents('.items.full').next('.full').find('textarea').attr('disabled', true);
        }
    })
    
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
    });

    //sideMenu Fn
    // $('.btn--sch, .btn--mobile').click(function(){
    //     let $this = $(this);
    //     let $dataId = $this.data('id');
    //     let mobileIcon = $this.find('i');
    //     let $contId = $('#' + $dataId);
    //     mobileIcon.addClass('active');
    //     $('.btn--mobile').addClass('off');
    //     $('.btn--close').addClass('on');
    //     if(mobileIcon.hasClass('active')){
    //         $('.btn--close').attr('id', $dataId);
    //     }
    //     $($contId).addClass('active');
    //     $('.btn#header__search').attr('title', '검색 닫힘');
    //     $('.btn#header__mobile').attr('title', '모바일 메뉴 닫힘');
    // }); 
    // $('.btn--close').click(function(){
    //     $(this).removeClass('on').attr('title', '');
    //     $('.btn i').removeClass('active');
    //     $('.btn--mobile').removeClass('off');
    //     $('.side-sch, .side-menu').removeClass('active');
    // })
    $('.btn--sch, .btn--mobile').click(function(){
        let $this = $(this),
        $dataId = $this.data('id'),
        $thisIcon = $this.children('i');

        $('div[class*="side-"]').removeClass('active');
        $thisIcon.addClass('on');
        $('#' + $dataId).addClass('active');
        $('.btn--close').attr('id', $dataId).addClass('on');
        $('.btn--mobile').addClass('off');
        
        $('.btn#header__search').attr('title', '검색 닫힘');
        $('.btn#header__mobile').attr('title', '모바일 메뉴 닫힘');
        $('.btn--sch').hide();
    }); 
    $('.btn--close').click(function(){
        $(this).attr('title', '');
        $(this).attr('id', '').removeClass('on');
        $('button[class*="btn--"] i').removeClass('on');
        $('div[class*="side-"]').removeClass('active');
        $('.btn--mobile').removeClass('off');
        $('.btn--sch').show();
    })
    

    //notice
    var swipernotice = new Swiper(".gnb .notice .swiper-container", {
        slidesPerView: 'auto',
        //spaceBetween: 10,
        //slidesPerView: 1,
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
        //slidesPerView: 1,
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
        //slidesPerView: 'auto',
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
        if($('#tabCalendar02').hasClass('current')){ //calendar tab event
            $('.calendarSt div a').parent().addClass('hasEvent');
            $('.hasEvent').append('<button type="button"></button>');
        }else{
            $('.calendarSt div a').removeClass('hasEvent');
            $('.hasEvent button').remove();
        }
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

    acc_event('.acc_admit');  //아코디언 Object
    acc_event('.acc_menu'); //mobile menu fn

})

var acc_event = function(this_obj) { //아코디언 FN
    var $click_this = $(this_obj);
    var parent_class = $click_this.parent('div').attr('class');
    $click_this.click(function(e) {
        if (!$(this).parent('div').hasClass('on')) {
            $('.accordion').find('.'+parent_class+'').removeClass('on');
            $('.accordion').find('.'+parent_class+'').find('div').slideUp('fast');
            $(this).parent('div').addClass('on');
            $(this).parent('div').find('div').slideDown('fast');
        } else {
            $(this).parent('div').removeClass('on');
            $(this).parent('div').find('div').slideUp('fast');
        }
    });
}

function uploadFile(){
    var fileTarget = $('.form.file.upload-hidden');
    fileTarget.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        }
        else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        };
        $(this).siblings('.upload-name').val(filename);
    });
}