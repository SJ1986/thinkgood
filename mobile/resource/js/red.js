$(function () {
    projectClick();
    pwCheck();
    genderButton();
   
});

function projectClick(){
    var item = $('.board-write .tab-content .mody_items .items');
    item.click(function(){
        $(this).toggleClass('selection');
    });
}  
function genderButton(){
    $('.formGender button').click(function(){
        $(this).removeClass('on');
        $(this).addClass('on');
    });
}    
function pwCheck(){
    $('.modal-footer .cancel').click(function(){
        $('.modal.myRoom_apply').removeClass('modal-open');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').removeClass('show'); 
    });
}   