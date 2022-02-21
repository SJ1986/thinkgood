$(function () {
    pwCheck();
});

function pwCheck(){
    $('.modal-footer .cancel').click(function(){
        $('.modal.myRoom_apply').removeClass('modal-open');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').removeClass('show'); 
    });
}    