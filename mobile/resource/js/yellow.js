$(function () {
    scrapOn();
    linkPlus(); // 링크 추가 버튼 클릭
    filePlus(); // 파일첨부 버튼 클릭
});

function scrapOn(){
   $(".button-scrap").click(function(){
       $(this).toggleClass("on");
   })
}
function linkPlus(){

    $(".click-plusLink").on("click",function(){
        var $formClone = $(this).parent().prev().children('.form-input:last');
        var $clone = $formClone.clone().addClass("clone");

        $cloneInput = $('<div class="form-input d-flex align-items-center"><input type="text" name="searchKeyword" value="" id="" class="form-input w-600" placeholder="URL을 입력해 주세요" /><button class="button-delete"></button></div>').addClass("clone");
        $formClone.after($cloneInput);

        
        // 삭제
        $(".button-delete").on("click",function(){
			var $delInput = $(this).parents('.form-input.clone');
			$delInput.remove();
		});
    });
  

 }

 function filePlus(){

    $(".click-plusFile").on("click",function(){
        var $formClone2 = $(this).parent().prev().children('.form-input:last');
        var $clone2 = $formClone2.clone().addClass("clone");

        $cloneInput2 = $('<div class="form-input d-flex align-items-center"><input type="text" name="searchKeyword" value="" id="" class="form-input w-600" placeholder="파일을 추가해 주세요." /><button class="button-delete"></button></div>').addClass("clone");
        $formClone2.after($cloneInput2);

        
        // 삭제
        $(".button-delete").on("click",function(){
			var $delInput2 = $(this).parents('.form-input.clone');
			$delInput2.remove();
		});
    });
  

 }