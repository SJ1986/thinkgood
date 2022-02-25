$(function () {
    mainSlide();
});

function mainSlide(){
    var mainVisual = new Swiper(".main-visual .swiper-container", {
        slidesPerView: 1,
        pagination: {
            el: ".main-visual .swiper-pagination",
            type:"fraction",
        },
    });
    var top10Slide = new Swiper('.top10 .swiper-container', {
        slidesPerView:'auto',
    });
    var campusSlide = new Swiper('.campusSlide .swiper-container', {
        slidesPerView:'auto',
        spaceBetween:20,
    });
}