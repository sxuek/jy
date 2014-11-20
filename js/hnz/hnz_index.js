$(function(){
	//返回顶部
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


	//login btns click
	$('.hnz_logo-box .hnz_btn').mousedown(function(){$(this).css({background:'#006c6c'})});
	$('.hnz_logo-box .hnz_btn').mouseup(function(){$(this).css({background:'#009494'})});
	$('.hnz_logo-box .hnz_search-btn').mousedown(function(){$(this).css({background:'#009494 url(images/hnz_search_click.gif) no-repeat 0 0'})});
	$('.hnz_logo-box .hnz_search-btn').mouseup(function(){$(this).css({background:'#009494 url(images/hnz_search.gif) no-repeat 0 0'})});
	//nav
	var t;
	$('.hnz_nav li>a').hover(function(){$(this).css({background:'#009494',color:'#fff'});},function(){
		$(this).css({background:'',color:''});
	})
	$('.hnz_nav li:not(:first)').hover(function(){
		var index=$('.hnz_nav li:not(:first)').index(this);
		$(this).find('i').css({background:'url(images/hnz_arrow_hot.png) no-repeat 0 0'})
		t=setTimeout(function(){
			$('.hnz_nav li dl:eq('+index+')').slideDown(300);
			},150)
		},function(){
			$('.hnz_nav li:not("#hnz_hot") i').css({background:'url(images/hnz_arrow.png) no-repeat 0 0'});
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
	var newTnum=0;
	var newT;
	$('.hnz_videolist li a').css({opacity:0.7});
	$('.hnz_videolist li a:first').css({background:'#007575'});
	$('.hnz_videolist li:last').addClass('hnz_notb');
	$('.hnz_video li').hover(function(){
		clearInterval(newT)
		},function(){
		newT=setInterval(newsTab,2000)
		})
	$('.hnz_videolist li a').hover(function(){
		clearInterval(newT)
		},function(){
		newT=setInterval(newsTab,2000)
		})
	$('.hnz_videolist li a').click(function(){
		
		var index=$('.hnz_videolist li a').index(this);
		$('.hnz_video li').css({display:'none'});
		$('.hnz_videolist li a').css({background:' #009494',opacity:0.7});
		$('.hnz_videoCon li').css({display:'none'});
		$('.hnz_video li:eq('+index+')').css({display:'block'});
		$(this).css({background:'#007575',opacity:1});

		$('.hnz_videoCon li:eq('+index+')').css({display:'block'});
		newTnum=index;
		})
	
	newT=setInterval(newsTab,3000)
	function newsTab(){
		newTnum++;
		if(newTnum>$('.hnz_videolist li a').length-1){newTnum=0;}
		$('.hnz_video li').css({display:'none'});
		$('.hnz_videoCon li').css({display:'none'});
		$('.hnz_videolist li a').css({background:' #009494',opacity:0.7});
		$('.hnz_video li:eq('+newTnum+')').css({display:'block'});
		$('.hnz_videolist li a:eq('+newTnum+')').css({background:'#007575',opacity:1});
		$('.hnz_videoCon li:eq('+newTnum+')').css({display:'block'});
		}	
		//banner video 结束
		//content tab 开始
		$('.hnz_sub-c-lft a').hover(function(){
			var index=$('.hnz_sub-c-lft a').index(this);
			$('.hnz_sub-c-rt li').css({display:'none'});
			$('.hnz_sub-c-rt li:eq('+index+')').css({display:'block'});
		})
		//content tab 结束
	})
	

