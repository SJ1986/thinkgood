$(function () {
	$(".lnb-list__dep2>li>a").click(function () {
		$(this).toggleClass("on");
		$(this).next(".dep3").slideToggle();
	});

	$("img[src$='img-contestbanner__noImg.png']").parent().parent().parent().addClass("noImg");

	//thinkgoodPick
	var thinkgoodPick = new Swiper(".thinkgoodPick-banner .swiper-container", {
		slidesPerView: 1,
		spaceBetween: 25,
		slidesPerView: "auto",
		centeredSlides: true,
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
		// navigation: {
		// 	nextEl: ".swiper-button-next",
		// 	prevEl: ".swiper-button-prev",
		// },
	});


	//다른 공모전 보기 슬라이드
	var otherContest = new Swiper(".other-contest__slide .swiper-container", {
		slidesPerView: 5,
		spaceBetween: 25,
		//centeredSlides: true,
		centeredSlides: true,
		roundLengths: true,
		loop: true,
		loopAdditionalSlides: 30,
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	//답글 클릭시
	$(".button-comment").click(function(){
		$(this).parent().next(".comment-box").slideToggle();
	});

	//전체 약관 동의
	$(".check-all input").click(function(){
		var $agreeAll = $(".check-box").children(".form-check").children("input");
		$($agreeAll).prop('checked',true);


		if($(".check-all input").is(":checked")) $($agreeAll).prop("checked", true);
		else $($agreeAll).prop("checked", false);

		// //클릭되었으면
        // if($($agreeAll).prop("checked")){
        //     //input태그의 name이 chk인 태그들을 찾아서 checked옵션을 true로 정의
        //     $($agreeAll).prop("checked",true);
        //     //클릭이 안되있으면
        // }else{
        //     //input태그의 name이 chk인 태그들을 찾아서 checked옵션을 false로 정의
        //     $($agreeAll).prop("checked",false);
        // }
		
	});

	var laborSwiper = new Swiper(".post4 .swiper-container", {
		slidesPerView: 5,
		spaceBetween: 25,
		navigation: {
			nextEl: ".post4 .swiper-button-next",
			prevEl: ".post4 .swiper-button-prev",
		},
	})
	var strategySwiper = new Swiper(".galleryStrategy .swiper-container", {
		slidesPerView: 3,
		spaceBetween: 25,
		navigation: {
			nextEl: ".galleryStrategy .swiper-button-next",
			prevEl: ".galleryStrategy .swiper-button-prev",
		},
	})
	var campusSwiper = new Swiper(".galleryCampus .swiper-container", {
		slidesPerView: 3,
		spaceBetween: 25,
		navigation: {
			nextEl: ".galleryCampus .swiper-button-next",
			prevEl: ".galleryCampus .swiper-button-prev",
		},
	})

	var thirdMenuSlide = new Swiper(".thirdMenuSlide", {
		slidesPerView:'auto',
	});

})