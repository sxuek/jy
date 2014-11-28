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
	//banner bg
	var imgs=$('.hnz_banner-bg img');
	var imgL=imgs.length;
	$('.hnz_banner-bg').hover(function(){
			$('.hnz_b-btns').animate({opacity:1})
		},function(){
			$('.hnz_b-btns').animate({opacity:0})
		})
	var imgNum=0;
	$('.hnz_l-btn').click(function(){
		imgs.css({zIndex:0},10);
		imgNum--;
		if(imgNum<0){imgNum=imgL-1};
		$(imgs[imgNum]).css({zIndex:3})
		})
	$('.hnz_r-btn').click(function(){
		imgs.css({zIndex:0},10);
		imgNum++;
		if(imgNum>imgL-1){imgNum=0};
		$(imgs[imgNum]).css({zIndex:3})
		})
	// banner video
	var newTnum=0;
	var newT;
	$('.hnz_video li:first').css({display:'block'});
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
		$('.hnz_sub-c-lft a:not(:first)').hover(function(){
			var index=$('.hnz_sub-c-lft a').index(this)-1;
			$('.hnz_sub-c-rt li').css({display:'none'});
			$('.hnz_sub-c-rt li:eq('+index+')').css({display:'block'});
		})
		//content tab 结束
	})
	

