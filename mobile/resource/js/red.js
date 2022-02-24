$(function () {
    projectClick();
    pwClick();
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
        if($('this').hasClass('on')){
            $(this).offset().removeClass('on');
        }else{
            $(this).addClass('on');
        }

       
       
    });
}    
function pwClick(){
    $('.modal .cancel').click(function(){
        $('.modal').removeClass('show');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').removeClass('show'); 
    });
}   