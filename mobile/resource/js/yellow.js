$(function () {
    thinkgoodPickList();
    scrapOn();
    linkPlus(); // 링크 추가 버튼 클릭
    filePlus(); // 파일첨부 버튼 클릭
    footerMt0(); //footer mt-0 적용
    btnShare();
});

function thinkgoodPickBanner(){
    const thinkgoodPickBanner = new Swiper(".thinkgoodPick-banner__inner .swiper-container", {
        spaceBetween:20,
        autoHeight: true,
	});
    
}
function thinkgoodPickList(){
    //thinkgoodPick
	const thinkgoodPickList = new Swiper(".thinkgoodPick-list .swiper-container", {
        slidesPerView:'auto',
        //spaceBetween:30,
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
        grid: {
            rows: 1,
            column: 1,
        },
		// navigation: {
		// 	nextEl: ".swiper-button-next",
		// 	prevEl: ".swiper-button-prev",
		// },
	});
}

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

 function footerMt0(){
    //$(".button-bottom").parents().find(".wrap").children("footer").addClass("mt-0");
 }

 function btnShare(){
     $(".button-share").click(function(){
         $(this).toggleClass("on");
     });
     $(".share-button__inner .button-close").click(function(){
        $(this).parent().parent().prev().removeClass("on");
    })
 }



 $(document).ready(function(){       
    $(".filter-keywordSearch__inner a").click(function(){
        $(this).toggleClass("selected");
    })
});

