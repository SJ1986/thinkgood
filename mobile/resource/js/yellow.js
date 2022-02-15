$(function () {
    scrapOn();
});

function scrapOn(){
   $(".button-scrap").click(function(){
       $(this).toggleClass("on");
   })
}