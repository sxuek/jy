$(function(){
	//login btns click
	$('.hnz_logo-box .hnz_btn').mousedown(function(){$(this).css({background:'#006c6c'})});
	$('.hnz_logo-box .hnz_btn').mouseup(function(){$(this).css({background:''})});
	$('.hnz_logo-box .hnz_search-btn').mousedown(function(){$(this).css({background:'#009494 url(images/hnz_search_click.gif) no-repeat 0 0'})});
	$('.hnz_logo-box .hnz_search-btn').mouseup(function(){$(this).css({background:'#009494 url(images/hnz_search.gif) no-repeat 0 0'})});
	//nav
	var t;
	$('.hnz_nav li:not(:first)').hover(function(){
		var index=$('.hnz_nav li:not(:first)').index(this);
		t=setTimeout(function(){
			$('.hnz_nav li:not(:first) dl:eq('+index+')').slideDown(300);
			},150)
		},function(){
			clearTimeout(t);
			$('.hnz_nav li dl').slideUp(200);
	})
	//banner bg
	var imgs=$('.hnz_banner-bg img');
	var imgL=$('.hnz_banner-bg img').length;
	$('.hnz_banner-bg').hover(function(){
			$('.hnz_b-btns').animate({opacity:1})
		},function(){
			$('.hnz_b-btns').animate({opacity:0})
		})
	var imgNum=0;
	$('.hnz_l-btn').click(function(){	
		imgs.animate({opacity:0},10);
		imgNum--;
		if(imgNum<0){imgNum=imgL-1};
		$(imgs[imgNum]).animate({opacity:1},500)
		})
	$('.hnz_r-btn').click(function(){
		imgs.animate({opacity:0},10);
		imgNum++;
		if(imgNum>imgL-1){imgNum=0};
		$(imgs[imgNum]).animate({opacity:1},500)
		})
	// banner video
	$('.hnz_videolist li a').css({opacity:0.7});
	$('.hnz_videolist li a:first').css({background:'#007575'});
	$('.hnz_videolist li:last').addClass('hnz_notb');
	$('.hnz_videolist li a').click(function(){
		var index=$('.hnz_videolist li a').index(this);
		$('.hnz_video li').css({display:'none'});
		$('.hnz_videolist li a').css({background:' #009494',opacity:0.7});
		$('.hnz_videoCon li').css({display:'none'});
		$('.video li:eq('+index+')').css({display:'block'});
		$(this).css({background:'#007575',opacity:1});
		
		$('.hnz_videoCon li:eq('+index+')').css({display:'block'});
		
		})
	})