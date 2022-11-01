/*-----------------------------------------------------------------------------------
/* Custom JS
-----------------------------------------------------------------------------------*/
/* ----------------- Start Document ----------------- */
jQuery(document).ready(function() {


/*----------------------------------------------------*/
/*	ホバー時のフェード（リンク画像等にクラスを指定）
/*----------------------------------------------------*/
 	jQuery( '.fadebutton' ) .hover(function() {
			jQuery(this).stop(true, true).addClass( 'hv', 200);
			return false;
		}, function() {
			jQuery(this).stop(true, true).removeClass( 'hv', 200);
			return false;
	});
/*----------------------------------------------------*/
/*	読み込み時のフェードイン（メインビジュアル等にクラスを指定）
/*----------------------------------------------------*/
	$(".fadein").css("display","none");

	$(".fadein").fadeIn(2000);

/* ------------------ End Document ------------------ */
});

		$(function(){
		setTimeout(function(){
			$('.move1').animate({'right':'0px'},500);
		},1000);
		setTimeout(function(){
        	$('.move1').animate({'right':'-100%'},500);
		},7000);
		});
$(function(){
    $(window).load(function(){
        var $setElm = $('.ticker');
        var effectSpeed = 1000;
        var switchDelay = 4000;
        var easing = 'swing';
 
        $setElm.each(function(){
            var effectFilter = $(this).attr('rel'); // 'fade' or 'roll' or 'slide'
 
            var $targetObj = $(this);
            var $targetUl = $targetObj.children('ul');
            var $targetLi = $targetObj.find('li');
            var $setList = $targetObj.find('li:first');
 
            var ulWidth = $targetUl.width();
            var listHeight = $targetLi.height();
            $targetObj.css({height:(listHeight)});
            $targetLi.css({top:'0',right:'0',position:'absolute'});
 
            var liCont = $targetLi.length;
 
            if(effectFilter == 'roll') {
                $setList.css({top:'3em',display:'block',opacity:'0',zIndex:'98'}).stop().animate({top:'0',opacity:'1'},effectSpeed,easing).addClass('showlist');
                if(liCont > 1) {
                    setInterval(function(){
                        var $activeShow = $targetObj.find('.showlist');
                        $activeShow.animate({top:'-3em',opacity:'0'},effectSpeed,easing).next().css({top:'3em',display:'block',opacity:'0',zIndex:'99'}).animate({top:'0',opacity:'1'},effectSpeed,easing).addClass('showlist').end().appendTo($targetUl).css({zIndex:'98'}).removeClass('showlist');
                    },switchDelay);
                }
            } 
        });
    });
});



$(function() {
       $(".overlay").click(function() {
		     var index = $('.overlay').index(this);
             $(".overlayall").eq(index).fadeIn();
   });
       $(".overlayall").click(function() {
             $(this).fadeOut();
   });
  });
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
