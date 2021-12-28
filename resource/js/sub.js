$(function () {


	$(".lnb-list__dep2>li>a").click(function () {
		$(this).toggleClass("on");
		$(this).next(".dep3").slideToggle();
	});

	$("img[src$='img-contestbanner__noImg.png']").parent().parent().parent().addClass("noImg");





	//thinkgoodPick
	var thinkgoodPick = new Swiper(".thinkgoodPick-banner .swiper-container", {
		slidesPerView: 2,
		spaceBetween: 25,
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
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
	})












})