$(function(){
	//返回顶部
	!function(){
	$(".to-top").hide();
	var top;
	var t;

	$(window).scroll(function(){
		if($(this).scrollTop() > 300){
			$('.to-top').show();
			clearTimeout(t);
			t = setTimeout(function(){
					$('.to-top').animate({bottom:120},100,function(){
							$('.to-top').animate({bottom:102},100);
					});
			},200);
		}else{
			$('.to-top').hide();
		};
		top = $(this).scrollTop();
	});

	$(".to-top").click(function(){
		$({someValue: top }).animate(
			{someValue: 0}, {
			duration: 700,
			step: function() {
				$(window).scrollTop(this.someValue);
			}
		});
	});
}();
	//login btns click
	$('.hnz_logo-box .hnz_btn').mousedown(function(){$(this).css({background:'#006c6c'})});
	$('.hnz_logo-box .hnz_btn').mouseup(function(){$(this).css({background:'#009494'})});
	$('.hnz_logo-box .hnz_search-btn').mousedown(function(){
		$(this).addClass('hnz_search-btn-down');
		$(this).removeClass('hnz_search-btn-up');
		});
	$('.hnz_logo-box .hnz_search-btn').mouseup(function(){
		$(this).removeClass('hnz_search-btn-down');
		$(this).addClass('hnz_search-btn-up');
		});
	//nav
	var t;
	$('.hnz_nav li>a').hover(function(){$(this).css({background:'#009494',color:'#fff'});},function(){
		$(this).css({background:'',color:''});
	})
	$('.hnz_nav li:not(:first)').hover(function(){
		var index=$('.hnz_nav li:not(:first)').index(this);
		$(this).find('i').addClass('hnz_nav-i');
		t=setTimeout(function(){
			$('.hnz_nav li dl:eq('+index+')').slideDown(300);
			},150)
		},function(){
			$('.hnz_nav li:not("#hnz_hot") i').removeClass('hnz_nav-i');
			clearTimeout(t);
			$('.hnz_nav li dl').slideUp(200);
	})
})
