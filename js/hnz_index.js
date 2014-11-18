$(function(){
	//login btns click
	$('.logo-box .btn').mousedown(function(){$(this).css({background:'#006c6c'})});
	$('.logo-box .btn').mouseup(function(){$(this).css({background:''})});
	$('.logo-box .search-btn').mousedown(function(){$(this).css({background:'#009494 url(images/hnz_search_click.gif) no-repeat 0 0'})});
	$('.logo-box .search-btn').mouseup(function(){$(this).css({background:'#009494 url(images/hnz_search.gif) no-repeat 0 0'})});
	//login 结束
	//nav开始
	var t;
	$('.nav li:not(:first)').hover(function(){
		var index=$('.nav li:not(:first)').index(this);
		t=setTimeout(function(){
			$('.nav li:not(:first) dl:eq('+index+')').slideDown(300);
			},150)
		},function(){
			clearTimeout(t);
			$('.nav li dl').slideUp(200);
	})
	//nav结束
	})