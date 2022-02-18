'use strict';
$(function () {
    thumbListHover();
});

function thumbListHover(){
    $('.list-thumb.pick li').hover(function(){
        $(this).toggleClass('on')
        if($(this).hasClass('on')){
            $(this).find('img').attr('src','./resource/image/main/img-hoverImg-01.jpg');
        }else{
            $(this).find('img').attr('src','./resource/image/sub/img-contestThumb02.png');
        }
    })
    $('.list-thumb.activity li').hover(function(){
        $(this).toggleClass('on')
        if($(this).hasClass('on')){
            $(this).find('img').attr('src','./resource/image/main/img-hoverImg-02.jpg');
        }else{
            $(this).find('img').attr('src','./resource/image/sub/img-contestThumb03.png');
        }
    })
}