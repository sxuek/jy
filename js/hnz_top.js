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
	var logBtn=$('.hnz_logo-box .hnz_btn');
	logBtn.mousedown(function(){$(this).css({background:'#006c6c'})});
	logBtn.mouseup(function(){$(this).css({background:'#009494'})});
	
	var searBtn=$('.hnz_logo-box .hnz_search-btn');
	searBtn.mousedown(function(){
		$(this).addClass('hnz_search-btn-down');
		$(this).removeClass('hnz_search-btn');
		});
	searBtn.mouseup(function(){
		$(this).removeClass('hnz_search-btn-down');
		$(this).addClass('hnz_search-btn');
		});
	//nav
	var t;
	$('.hnz_nav li>a').hover(function(){$(this).css({background:'#009494',color:'#fff'});},function(){
		$(this).css({background:'',color:''});
	})
	var hnzNavLi=$('.hnz_nav li:not(:first)');
	hnzNavLi.hover(function(){
		var index=hnzNavLi.index(this);
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
